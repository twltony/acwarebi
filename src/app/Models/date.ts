export class Date{
    private _day:String;
    private _month:String;
    private _year:string;

	public get day(): String {
		return this._day;
	}

	public set day(value: String) {
		this._day = value;
	}

	public get month(): String {
		return this._month;
	}

	public set month(value: String) {
		this._month = value;
	}

	public get year(): string {
		return this._year;
	}

	public set year(value: string) {
		this._year = value;
	}
    
}