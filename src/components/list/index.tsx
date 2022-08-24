import React, {
    useState,
    useEffect
} from "react";

import { CardTextWrapper } from "../Card/styles";
import { CardWrapper } from "../Card";
import ChecklistDataService from "../../services/services";
import IChecklistData from "../../types/checklist";

const ChecklistsList: React.FC = () => {
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
        <div className="checklistItem">
            <div className="col-md-6">
                <h4>Checklists List</h4>

                {checklists &&
                    checklists.map((checklist, index) => (
                        <CardWrapper>
                            <CardTextWrapper>
                                {checklist.type}
                            </CardTextWrapper>

                        </CardWrapper>

                    ))
                }

                <ul className="list-group">
                    {checklists &&
                        checklists.map((checklist, index) => (
                            <li
                                className={
                                    "list-group-item " + (index === currentIndex ? "active" : "")
                                }
                                onClick={() => setActiveChecklist(checklist, index)}
                                key={index}
                            >
                                {checklist.type}
                            </li>
                        ))}
                </ul>
            </div>
            {/* <div className="col-md-6">
                {currentChecklist ? (
                    <div>
                        <h4>Checklist</h4>
                        <div>
                            <label>
                                <strong>Title:</strong>
                            </label>{" "}
                            {currentChecklist.title}
                        </div>
                        <div>
                            <label>
                                <strong>Description:</strong>
                            </label>{" "}
                            {currentChecklist.description}
                        </div>
                        <div>
                            <label>
                                <strong>Status:</strong>
                            </label>{" "}
                            {currentChecklist.published ? "Published" : "Pending"}
                        </div>

                        <Link
                            to={"/checklists/" + currentChecklist.id}
                            className="badge badge-warning"
                        >
                            Edit
                        </Link>
                    </div>
                ) : (
                    <div>
                        <br />
                        <p>Please click on a Checklist...</p>
                    </div>
                )}
            </div> */}
        </div>
    );
};

export default ChecklistsList;
