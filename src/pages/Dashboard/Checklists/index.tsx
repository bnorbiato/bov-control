import React, {
    useState,
    useEffect
} from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import ChecklistDataService from "../../../services/services";
import IChecklistData from "../../../hooks/checklist";
import { Layout } from "../../../components/Layout";
import Headline from "../../../components/Headline";
import Card from "../../../components/Card";
import MiniCard from "../../../components/MiniCard";
import EmptyData from "../../../components/EmptyData";

const Checklists: React.FC = () => {
    const [checklists, setChecklists] = useState<Array<IChecklistData>>([]);
    const [currentChecklist, setCurrentChecklist] = useState<IChecklistData | null>(null);
    const [currentIndex, setCurrentIndex] = useState<number>(-1);

    const history = useHistory();

    useEffect(() => {
        retrieveChecklists();
    }, []);

    const retrieveChecklists = () => {
        ChecklistDataService.getAllChecklists()
            .then((response: any) => {
                setChecklists(response.data);
                console.log(response.data);
            })
            .catch((e: Error) => {
                console.log(e);
            });
    };

    const setActiveChecklist = (checklist: IChecklistData, index: number) => {
        setCurrentChecklist(checklist);
        setCurrentIndex(index);
    };

    const goToChecklist = () => {
        history.push('/checklist');
    }

    return (
        <Layout>
            <Headline
                headline={"Bem-vindo ao seu dashboard."}
                text={""}
            />

            <Row>
                <Col md={8}>
                    {checklists &&
                        checklists.map((checklist, index) => (
                            <div className={
                                "cardItem " + (index === currentIndex ? "active" : "")
                            }
                                onClick={() => setActiveChecklist(checklist, index)}
                                key={index}
                            >
                                <Card
                                    title={checklist.from.name}
                                    text={checklist.farmer.city}
                                    subtitle={checklist.farmer.name}
                                    date={checklist.updated_at}
                                />
                            </div>
                        ))}
                </Col>

                <Col md={4}>
                    <Headline
                        headline={""}
                        text={"Selecione uma fazenda para visualizar mais informações."}
                    />

                    {currentChecklist ? (
                        <>
                            <MiniCard
                                title={currentChecklist.from.name}
                                text={currentChecklist.farmer.city}
                                subtitle={currentChecklist.farmer.name}
                                date={currentChecklist.updated_at}
                                numberOfCows={currentChecklist.number_of_cows_head}
                            />
                            <Button
                                onClick={() => {
                                    history.push("/dashboard/checklist/" + currentChecklist._id);
                                  }}
                            > Editar </Button>
                        </>
                    ) : <EmptyData
                        title={"Sem informações para exibir"}
                    />
                    }
                </Col>
            </Row>
        </Layout>
    );
};

export default Checklists;
