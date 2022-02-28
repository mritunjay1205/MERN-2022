const Allowance = {
    basicSalary: 0,
    Hra : function(){
        return this.basicSalary * 0.5; 
    },
    Da : function(){
        return this.basicSalary * 0.2; 
    },
    Ta : function(){
        return this.basicSalary * 0.3; 
    },
    Ma : function(){
        return this.basicSalary * 0.15; 
    },
    Pf : function(){
        return this.basicSalary * 0.05; 
    },
    Gs : function(){
        return this.basicSalary + this.Hra() + this. Da() + this.Ta() + this.Ma(); 
    },
    Ns : function(){
        return  this. Gs() - this.Pf();
    }
}