import { CustomInput } from "~/login/components/CustomInput";

export function SubjectModal(){
    return(
        <div className="modalHolder">
            <div className="subjectModal">
                <div className="flex">
                    <CustomInput 
                    label="Email Address"
                    type="text"
                    name="email"
                    placeholder="name@example.com"
                />
                <CustomInput 
                    label="Email Address"
                    type="text"
                    name="email"
                    placeholder="name@example.com"
                />
                </div>
            </div>
        </div>
    )
}