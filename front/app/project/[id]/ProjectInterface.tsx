export interface ProjectInterface {
    id: number,
    attributes: ProjectAttributesInterface
}

interface ProjectAttributesInterface {
    About_the_project: string,
    Category: string [],
    Hero_image: {
        data: {
            attributes: {
                url: string
            }
        }
    },
    Objectives: string,
    Project_name: string,
    Result: string,
    Solution: string,
    Technologies: string[],
    We_did: string
}

