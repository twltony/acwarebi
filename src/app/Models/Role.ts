import {User} from "./User"
export class Role{
    public rId : string;

    public roleName : string;

    public descriptions : string;

    public user: [User];
 

	public get $rId(): string {
		return this.rId;
	}

	public set $rId(value: string) {
		this.rId = value;
	}
    

	public get $roleName(): string {
		return this.roleName;
	}

	public set $roleName(value: string) {
		this.roleName = value;
	}

	public get $descriptions(): string {
		return this.descriptions;
	}

	public set $descriptions(value: string) {
		this.descriptions = value;
	}
    

	public get $user(): [User] {
		return this.user;
	}

	public set $user(value: [User]) {
		this.user = value;
	}
    
}