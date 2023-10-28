export interface ExpertsCountGroupByProvince {
    count:number,
    province:string,
    provinceId:number
}

export  interface ExpertCountData {
    confirmedExpertsCount:number,
    confirmedExpertsCountGroupByProvince:ExpertsCountGroupByProvince[]
}

