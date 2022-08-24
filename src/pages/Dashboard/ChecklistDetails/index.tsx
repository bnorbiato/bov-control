import React, { useState, useEffect, ChangeEvent } from "react";
import { 
    useParams
} from 'react-router-dom';

import ChecklistDataService from "../../../services/services";
import IChecklistData from "../../../types/checklist";

const ChecklistDetails: React.FC = () => {
    const { _id } = useParams();

    const initialChecklistState = {
        _id: null,
        type: "",
        amount_of_milk_produced: "",
        farmer: {
            name: "",
            city: ""
        },
        from: {
            name: ""
        },
        to: {
            name: ""
        },
        number_of_cows_head: "",
        had_supervision: false,
        location: {
            latitude: "",
            longitude: ""
        },
        created_at: "",
        updated_at: ""
    };

    const [currentChecklist, setCurrentChecklist] = useState<IChecklistData>(initialChecklistState);
    const [message, setMessage] = useState<string>("");

    const getChecklist = (_id: string) => {
        ChecklistDataService.getChecklistById(_id)
            .then((response: any) => {
                setCurrentChecklist(response.data);
                console.log(response.data);
            })
            .catch((e: Error) => {
                console.log(e);
            });
    };

    useEffect(() => {
        if (_id)
            getChecklist(_id);
    }, [_id]);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setCurrentChecklist({ ...currentChecklist, [name]: value });
    };

    const updateExistChecklist = (status: boolean) => {
        var data = {
            _id: currentChecklist._id,
            type: currentChecklist.type,
            amountOfMilkProduced: currentChecklist.amount_of_milk_produced,
            farmerName: currentChecklist.farmer.name,
            farmerCity: currentChecklist.farmer.city,
            from: currentChecklist.from.name,
            to: currentChecklist.to.name,
            numberOfCowsHead: currentChecklist.number_of_cows_head,
            hadSupervision: currentChecklist.had_supervision,
            locationLatitude: currentChecklist.location.latitude,
            locationLongitude: currentChecklist.location.longitude
        };

        ChecklistDataService.updateChecklist(currentChecklist._id, data)
            .then((response: any) => {
                console.log(response.data);
                setCurrentChecklist({ ...currentChecklist});
                setMessage("The status was updated successfully!");
            })
            .catch((e: Error) => {
                console.log(e);
            });
    };

    const updateChecklist = () => {
        ChecklistDataService.updateChecklist(currentChecklist._id, currentChecklist)
            .then((response: any) => {
                console.log(response.data);
                setMessage("The checklist was updated successfully!");
            })
            .catch((e: Error) => {
                console.log(e);
            });
    };

    return (
        <div>
            {currentChecklist ? (
                <div className="edit-form">
                    <h4>Checklist</h4>
                    <form>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                name="title"
                                value={currentChecklist.type}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <input
                                type="text"
                                className="form-control"
                                id="description"
                                name="description"
                                value={currentChecklist.amount_of_milk_produced}
                                onChange={handleInputChange}
                            />
                        </div>
                    </form>

                    {currentChecklist.had_supervision ? (
                        <button
                            className="badge badge-primary mr-2"
                            onClick={() => updateExistChecklist(false)}
                        >
                            UnPublish
                        </button>
                    ) : (
                        <button
                            className="badge badge-primary mr-2"
                            onClick={() => updateExistChecklist(true)}
                        >
                            Publish
                        </button>
                    )}

                    <button
                        type="submit"
                        className="badge badge-success"
                        onClick={updateChecklist}
                    >
                        Update
                    </button>
                    <p>{message}</p>
                </div>
            ) : (
                <div>
                    <br />
                    <p>Please click on a Checklist...</p>
                </div>
            )}
        </div>
    );
};

export default ChecklistDetails;
