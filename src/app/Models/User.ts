import { Role } from './Role';
export class User {
	public uId: string;
	public username: string;
	public password: string;
	public vseusername: string;
	public isvalid: any;
	public isalive: any;
	public count: number;
	public lastLoginDate: Date;
	public createDate: Date;
	public role: Object[];

	public get _id(): string {
		return this.uId;
	}

	public set _id(value: string) {
		this.uId = value;
	}

	public get _userName(): string {
		return this.username;
	}

	public set _userName(value: string) {
		this.username = value;
	}

	public get _passWord(): string {
		return this.password;
	}

	public set _passWord(value: string) {
		this.password = value;
	}

	public get _roles(): Object[] {
		return this.role;
	}

	public set _roles(value: Object[]) {
		this.role = value;
	}


	public get _displayName(): string {
		return this.vseusername;
	}

	public set _displayName(value: string) {
		this.vseusername = value;
	}

	public get _isalive(): number {
		return this.isalive;
	}

	public set _isalive(value: number) {
		this.isalive = value;
	}

	public get _isvalid(): number {
		if (this.isvalid == true) {
			return this.isvalid = 1
		} else {
			return this.isvalid = 0;
		}
	}

	public set _isvalid(value: number) {
		this.isvalid = value;
	}

	public get _lastLoginDate(): Date {
		return this.lastLoginDate;
	}

	public set _lastLoginDate(value: Date) {
		this.lastLoginDate = value;
	}

	public get _createDate(): Date {
		return this.createDate;
	}

	public set _createDate(value: Date) {
		this.createDate = value;
	}

	public get _count(): number {
		return this.count;
	}

	public set _count(value: number) {
		this.count = value;
	}

}