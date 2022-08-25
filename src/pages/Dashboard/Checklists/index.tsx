import React, {
    useState,
    useEffect
} from "react";
import {
    Row,
    Col
} from "react-bootstrap";

import ChecklistDataService from "../../../services/services";
import IChecklistData from "../../../hooks/checklist";
import { Layout } from "../../../components/Layout";
import { Headline, TextWrapper, Text } from "../../../components/Texts";
import Card from "../../../components/Card";

const Checklists: React.FC = () => {

    const [checklists, setChecklists] = useState<Array<IChecklistData>>([]);
    const [currentChecklist, setCurrentChecklist] = useState<IChecklistData | null>(null);
    const [currentIndex, setCurrentIndex] = useState<number>(-1);

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

    return (
        <Layout>
            <TextWrapper>
                <Headline>
                    Bem-vindo ao seu dashboard.
                </Headline>

                <Text>
                    Clique no nome da fazenda para visualizar mais informações.
                </Text>
            </TextWrapper>

            <Row>
                <Col sm={6} md={6}>
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

                <Col sm={6} md={6}>
                    {currentChecklist ? (
                        <p>
                            {currentChecklist.type}
                        </p>
                    ) : ''}
                </Col>
            </Row>
        </Layout>
    );
};

export default Checklists;
