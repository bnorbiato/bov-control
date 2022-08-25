import api from "./api";
import IChecklistData from "../hooks/checklist"; 

const getAllChecklists = () => {
    return api.get<Array<IChecklistData>>("/checkList");
};

const getChecklistById = (_id: any) => {
    return api.get<IChecklistData>(`/checkList/${_id}`);
};

const createChecklist = (data: IChecklistData) => {
    return api.post<IChecklistData>("/checkList", data);
};

const updateChecklist = (_id: any, data: IChecklistData) => {
    return api.put<any>(`/checkList/${_id}`, data);
};

const removeChecklist = (_id: any) => {
    return api.delete<any>(`/checkList/${_id}`);
};

const ChecklistService = {
    getAllChecklists,
    getChecklistById,
    createChecklist,
    updateChecklist,
    removeChecklist
};

export default ChecklistService;
