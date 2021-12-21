class Iron{
	constructor(x,y)
	{
	// assign options to the rubber ball
	var options={
		restitution: 0.8,
		friction: 3,
		density: 30

	}
		this.x=x;
		this.y=y;
		this.body=Bodies.rectangle(this.x, this.y, 50, 50, options)
        this.w = 80;
        this.h = 50;
		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;		
			push()
			translate(pos.x, pos.y);
            rotate(this.body.angle);
			rectMode(CENTER)
			fill("brown");
			//draw the ellipse here to display the rubber ball
			rect(0,0,this.w,this.h);

			pop()
	}

}