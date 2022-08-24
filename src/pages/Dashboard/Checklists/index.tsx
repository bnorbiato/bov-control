import React, {
    useState,
    useEffect
} from "react";
import { useHistory } from "react-router-dom";
import { GiFarmer } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { AiOutlineUserAdd } from "react-icons/ai";

import { styles } from "../../../styles";
import {
    CardWrapper,
    CardTextWrapper,
    CardTitle,
    CardSubTitle,
    CardIconWrapper
} from "../../../components/Card";
import ChecklistDataService from "../../../services/services";
import IChecklistData from "../../../types/checklist";
import { 
    ButtonText, 
    ButtonWrapper 
} from "../../../components/Button";
import { Link } from "react-router-dom";

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

    const setActiveChecklist = (tutorial: IChecklistData, index: number) => {
        setCurrentChecklist(tutorial);
        setCurrentIndex(index);
    };

    const handleAddChecklist = () => {
        history.push('/add');
    }

    return (
        <div
            className="checklistItem"
            style={styles.checklistWrapper}
        >
                <ButtonWrapper
                    onClick={handleAddChecklist}
                >
                    <ButtonText>
                        <AiOutlineUserAdd
                            size={20}
                            color="#ffffff"
                        />

                        Adicionar
                    </ButtonText>
                </ButtonWrapper>

            <div className="row">
                <div className="col-md-6">
                    {checklists &&
                        checklists.map((checklist, index) => (
                            <CardWrapper
                                className={
                                    "checklistGroupItem " + (index === currentIndex ? "active" : "")
                                }
                                onClick={() => setActiveChecklist(checklist, index)}
                                key={index}
                            >
                                <div className="checklistInfos">
                                    <div
                                        className="cardSubsection"
                                        style={styles.cardSubsection}
                                    >
                                        <CardIconWrapper>
                                            <GiFarmer
                                                size={20}
                                                color="#228B22"
                                            />
                                        </CardIconWrapper>

                                        <CardTitle>
                                            {checklist.from.name}
                                        </CardTitle>

                                    </div>
                                    <div
                                        className="cardSubsection"
                                        style={styles.cardSubsection}
                                    >
                                        <CardIconWrapper>
                                            <GoLocation
                                                size={15}
                                                color="#2E8B57"
                                            />
                                        </CardIconWrapper>

                                        <CardSubTitle>
                                            {checklist.farmer.name} -
                                            {checklist.farmer.city}
                                        </CardSubTitle>
                                    </div>


                                    <CardTextWrapper>
                                        {checklist.created_at}
                                    </CardTextWrapper>
                                </div>
                            </CardWrapper>
                        ))
                    }
                </div>
                <div className="col-md-6">
                    {currentChecklist ? (
                        <>
                            <p>
                                {currentChecklist.from.name}
                            </p>
                            <Link
                                to={"/checklist/" + currentChecklist._id}
                                className="badge badge-warning"
                            >
                                Edit
                            </Link>
                        </>
                    ) : ''}
                </div>
            </div>
        </div>
    );
};

export default Checklists;
