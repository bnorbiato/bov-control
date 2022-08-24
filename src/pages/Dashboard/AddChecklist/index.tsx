import React, {
    useState,
    ChangeEvent
} from "react";

import ChecklistDataService from "../../../services/services";
import IChecklistData from "../../../types/checklist";

const AddChecklist: React.FC = () => {
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
        created_at: ""
    };
    const [checklist, setChecklist] = useState<IChecklistData>(initialChecklistState);
    const [submitted, setSubmitted] = useState<boolean>(false);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setChecklist({ ...checklist, [name]: value });
    };

    const saveChecklist = () => {
        var data = {
            title: checklist.title,
            description: checklist.description
        };

        ChecklistDataService.create(data)
            .then((response: any) => {
                setChecklist({
                    id: response.data.id,
                    title: response.data.title,
                    description: response.data.description,
                    published: response.data.published
                });
                setSubmitted(true);
                console.log(response.data);
            })
            .catch((e: Error) => {
                console.log(e);
            });
    };

    const newChecklist = () => {
        setChecklist(initialChecklistState);
        setSubmitted(false);
    };

    return (
        <div className="submit-form">
            {submitted ? (
                <div>
                    <h4>You submitted successfully!</h4>
                    <button className="btn btn-success" onClick={newChecklist}>
                        Add
                    </button>
                </div>
            ) : (
                <div>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            required
                            value={checklist.title}
                            onChange={handleInputChange}
                            name="title"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input
                            type="text"
                            className="form-control"
                            id="description"
                            required
                            value={checklist.description}
                            onChange={handleInputChange}
                            name="description"
                        />
                    </div>

                    <button onClick={saveChecklist} className="btn btn-success">
                        Submit
                    </button>
                </div>
            )}
        </div>
    );
};

export default AddChecklist;
