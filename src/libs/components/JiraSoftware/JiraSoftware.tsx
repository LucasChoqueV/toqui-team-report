import { useAppDispatch } from "@/apps/hooks";
import { GenerateReportJsonCommand, generateReportJsonApi } from "@/libs/backend";
import { TrBox, TrContainer, TrMainCard, TrParagraph, TrSubTitle, TrTitle } from "@/libs/ui"

type JiraSoftwareProps = {}

const JiraSoftware = (props: JiraSoftwareProps) => {

    const dispatch = useAppDispatch();

    const handleClick = async () => {
        const token = "bHVjYXNAb3Blbml4LmNvbS5hcjpBVEFUVDN4RmZHRjBLVHJNVTFSbFA2NURSUDZ1XzIxVjZ1UnFuSE1uN19TMGRPbTFvaUFMZndxNXpOMmN3MDBmX21QVzVuM0ZzNGs5Wm5mZmRudk5XSV9BeS1Lcy16cUNYcmRlUWZMcUpkN0Fad1YwMjJ3TEI5Ymx1WnBKUlVsMDV1MGVtSERMWmVFbTN2aEc0dXV6NTVtTUMtWHR5d0xCNHBVeFZFY21yYmRuOTJSMlJxVTFUT2M9ODcxM0Y3QTM="
        const command: GenerateReportJsonCommand = {
            sprintName: "DT Sprint 5",
            boardName: "DT board",
            queries: [
                "Status/Assignee/IssueType",
                "Status/IssueType/Assignee",
                "Assignee/Status/IssueType",
                "Assignee/IssueType/Status",
                "IssueType/Status/Assignee",
                "IssueType/Assignee/Status"
            ]
        };

        await dispatch(generateReportJsonApi(token, command));

    }
    return (
        <TrMainCard>
            <TrContainer>
                <TrBox>
                    <TrTitle>
                        Jira Software
                    </TrTitle>
                    <TrSubTitle>
                        How to use it
                    </TrSubTitle>
                    <TrParagraph>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia distinctio laborum, quas iste iure doloremque adipisci aut sint cum consectetur vitae maiores quaerat in optio illo consequatur et culpa! Veritatis.
                    </TrParagraph>
                    <TrSubTitle>
                        Try it!
                    </TrSubTitle>
                    <div>
                        <button onClick={handleClick}>
                            Press
                        </button>
                    </div>
                </TrBox>
            </TrContainer>
        </TrMainCard>
    )
}

export default JiraSoftware