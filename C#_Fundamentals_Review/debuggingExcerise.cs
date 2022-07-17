// Below is a class that defines an Automobile.
// The Automobile may be of various types.
// Automobiles can be repaired by calling the Repair method.
// Repairing an Automobile requires two steps - repairing the brakes and
// repairing the engine.
// The procedure to repair the brakes is the same for every type of Automobile,
// but each type of Automobile has a specific procedure to repair the engine.
// Note that the repair methods (RepairBrakes, RepairSedanEngine, etc.) are
// placeholders and do not need to be implemented. They can remain empty.
//
// How can you improve the structure of this code using object oriented
// principles?
// Please update the code accordingly. Feel free to add new classes or methods.
// I think it would be good to have different classes for each car type. Override the method Repair method with one given by the children of Automobile.
//
// What data structure can be used to track and maintain unique instances of
// Automobiles? 
// Please describe or show an example in code.
// We can utilize a set datastructure for this. If order is important to us, we can use a regular set. If it is not we can use a hashset.
// I believe in C# set is HashSet and hashset is HashedSet. That is because HashedSet implements the ISet interface and HashSet does not. Either way we avoid duplicates.

public enum AutomobileType
{
	Sedan,
	Truck,
	Van
}

public abstract class Automobile
{

	public AutomobileType Type { get; set;}
	
	// Unique ID for the automobile.
	public string Vin { get; set;}

	public abstract void Repair();
	
	private void RepairBrakes()
	{
		//Applies to all automobile types.
        Console.WriteLine("Repairing brakes...");
	}
}

public class Sedan : Automobile {
    
    
	public Sedan(string vin)
	{
		Type = AutomobileType.Sedan;
		Vin = vin;
	}
	
	public override void Repair() {
		Console.WriteLine("Repairing sedan engine...");
	}
}

public class Van : Automobile {
    
    public Van(string vin)
	{
		Type = AutomobileType.Van;
		Vin = vin;
	}

	public override void Repair() {
		Console.WriteLine("Repairing van engine...");
	}
}

public class Truck : Automobile {
    
    public Truck(string vin)
	{
		Type = AutomobileType.Truck;
		Vin = vin;
	}
    
	public override void Repair() {
		Console.WriteLine("Repairing truck engine...");
	}
}
