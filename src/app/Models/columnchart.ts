import { Series } from './series'
export class ColumnChartData{
    private _chartTitle:String = "";
    private _categories:Object[] = [];
    private _series:Object[];
    private _yText :String;
    private _height :Number;
	private _event :Object;
	private _legendenable :Boolean;


	public get legendenable(): Boolean {
		return this._legendenable;
	}

	public set legendenable(value: Boolean) {
		this._legendenable = value;
	}
	
	public get event(): Object {
		return this._event;
	}

	public set event(value: Object) {
		this._event = value;
	}
	

	public get chartTitle(): String  {
		return this._chartTitle;
	}

	public set chartTitle(value: String ) {
		this._chartTitle = value;
	}
   
	public get series(): Object[]  {
		return this._series;
	}

	public set series(value: Object[] ) {
		this._series = value;
	}

	public get categories(): Object[]  {
		return this._categories;
	}

	public set categories(value: Object[] ) {
		this._categories = value;
	}

	public get yText(): String {
		return this._yText;
	}

	public set yText(value: String) {
		this._yText = value;
	}
	

	public get height(): Number {
		return this._height;
	}

	public set height(value: Number) {
		this._height = value;
	}
	
    
}