import { Role } from './Role';
export class User{
	private _id: string;
    private _userName: string;
    private _passWord: string;
    private _displayName: string;
    private _isvalid: number;
    private _isalive: number;
    private _count: number;
    private _lastLoginDate: Date;
    private _createDate: Date;
    private _roles: [Role];

	public get id(): string {
		return this._id;
	}

	public set id(value: string) {
		this._id = value;
	}
	
	public get userName(): string {
		return this._userName;
	}

	public set userName(value: string) {
		this._userName = value;
	}

	public get passWord(): string {
		return this._passWord;
	}

	public set passWord(value: string) {
		this._passWord = value;
	}

	public get roles(): [Role] {
		return this._roles;
	}

	public set roles(value: [Role]) {
		this._roles = value;
	}


	public get displayName(): string {
		return this._displayName;
	}

	public set displayName(value: string) {
		this._displayName = value;
	}

	public get isalive(): number {
		return this._isalive;
	}

	public set isalive(value: number) {
		this._isalive = value;
	}

	public get isvalid(): number {
		return this._isvalid;
	}

	public set isvalid(value: number) {
		this._isvalid = value;
	}

	public get lastLoginDate(): Date {
		return this._lastLoginDate;
	}

	public set lastLoginDate(value: Date) {
		this._lastLoginDate = value;
	}

	public get createDate(): Date {
		return this._createDate;
	}

	public set createDate(value: Date) {
		this._createDate = value;
	}

	public get count(): number {
		return this._count;
	}

	public set count(value: number) {
		this._count = value;
	}
    
}