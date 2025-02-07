


export interface Product {
    _id :string;
    productName :string;
    _type :"product";
    image? :{
        asset :{
            _ref :string;
            _type :"image";
        }
    };
    price :number;
    descriptiom? :string;
    status:string;
    category:string;
    color:string[];
    
}