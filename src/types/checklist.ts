export default interface IChecklistData {
    _id?: any | null,
    type: string,
    amount_of_milk_produced: number,
    farmer: {
        name: string,
        city: string
    },
    from: {
        name: string
    },
    to: {
        name: string
    },
    number_of_cows_head: number,
    had_supervision?: boolean,
    location: {
        latitude: number,
        longitude: number
    },
    created_at: Date,
    updated_at: Date,
}