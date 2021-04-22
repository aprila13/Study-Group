package com.tts;

//com.tts.Devices is the class

public class Devices {
        String name; //These are instance variables/fields/members
        String company;
        String type;
        int cost;

     //Constructor
    public Devices(String name, String company, String type, int cost) {
        this.name = name; //this.name is instance variable = name is a parameter, Data binding
        this.company = company;
        this.type = type;
        this.cost = cost;
    }
//
//
    //Method
    public void calling() {
       System.out.print("Someone is calling");
    }

//    //Getters + Setters
    public String getName() {
        return name;
    }
//
    public void setName(String name) {
        this.name = name;
    }
//
    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public int getCost() {
        return cost;
    }

    public void setCost(int cost) {
        this.cost = cost;
    }
}
