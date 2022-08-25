import React, {
    useState,
    ChangeEvent
} from "react";

import ChecklistDataService from "../../../services/services";
import IChecklistData from "../../../hooks/checklist";
import { Layout } from "../../../components/Layout";
import Headline from "../../../components/Headline";

const AddChecklist: React.FC = () => {
    const initialChecklistState = {
        _id: null,
        type: "",
        amount_of_milk_produced: 0,
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
        number_of_cows_head: 0,
        had_supervision: false,
        location: {
            latitude: 0,
            longitude: 0
        },
        created_at: new Date(),
        updated_at: new Date(),
    };
    const [checklist, setChecklist] = useState<IChecklistData>(initialChecklistState);
    const [submitted, setSubmitted] = useState<boolean>(false);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setChecklist({ ...checklist, [name]: value });
    };

    const saveChecklist = () => {
        var data = {
            _id: checklist._id,
            type: checklist.type,
            amount_of_milk_produced: checklist.amount_of_milk_produced,
            farmer: {
                name: checklist.farmer.name,
                city: checklist.farmer.city,
            },
            from: {
                name: checklist.from.name,
            },
            to: {
                name: checklist.to.name,
            },
            number_of_cows_head: checklist.number_of_cows_head,
            had_supervision: checklist.had_supervision,
            location: {
                latitude: checklist.location.latitude,
                longitude: checklist.location.longitude,
            },
            created_at: checklist.created_at,
            updated_at: checklist.updated_at
        };

        ChecklistDataService.createChecklist(data)
            .then((response: any) => {
                setChecklist({
                    _id: response.data._id,
                    type: response.data.type,
                    amount_of_milk_produced: response.data.amount_of_milk_produced,
                    farmer: response.data.farmer.name,
                    from: response.data.from.name,
                    to: response.data.to.name,
                    number_of_cows_head: response.data.number_of_cows_head,
                    had_supervision: response.data.had_supervision,
                    location: response.data.location.latitude,
                    created_at: response.date.created_at,
                    updated_at: response.data.updated_at
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
        <Layout>
            <Headline
                headline={"Adicionar nova fazenda"}
                text={"Preencha os dados no formulário"}
            />
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
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default AddChecklist;
