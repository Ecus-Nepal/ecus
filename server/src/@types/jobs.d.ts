declare interface IJobsDB {
    title: string,
    desc: string,
    creatorId: string,
    creatorName: string,
    expDate: string,
    jobsCategories: string[],
    salary: number,
    employeeApplied: string[],
    aprovedEmployee: number,
    pendingEmployee: number,
    rejectedEmployee: number,
}