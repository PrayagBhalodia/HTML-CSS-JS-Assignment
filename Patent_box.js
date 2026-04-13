
class PatentNode{
    constructor(image,title,description){
        this.image = image;
        this.title = title;
        this.description = description;
        this.prev=null;
        this.next=null;
    }
}

class CircularDoublyLinkedList{
    constructor(){
        this.head=null;
        this.current=null;
        this.size=0;
    }

    append(image,title,description){
        const newNode = new PatentNode(image,title,description);

        if(this.head == null){
            this.head = newNode;
            newNode.prev = newNode;
            newNode.next = newNode;
            this.current = newNode;
        }
        else{
            const tail = this.head.prev;
            tail.next=newNode;
            newNode.prev=tail;
            newNode.next=this.head;
            this.head.prev = newNode;
        }
        this.size++;
    }

    goNext(){
        if(this.current){
            this.current=this.current.next;
        }
    }

    goPrev(){
        if(this.current){
            this.current=this.current.prev;
        }
    }
}

const patents = new CircularDoublyLinkedList();

patents.append("images/1b7f4f7720643b890312a97ed827193e26f82f56.png",
    "REAL-TIME FOG REMOVAL SYSTEM AND ITS METHOD THEREOF",
    "The present invention provides a visible and near-infrared band's deep learning and pixel sharing-based system and method for image and video dehazing. It successfully restores hazy/foggy images with a wide range of haze/fog conditions. Unlike the prior art; the proposed invention utilized a wide electromagnetic spectrum for imaging from 400nm to 1400nm wavelength and performed dehazing/defogging in the entire range (visible and NIR bands). For this task, a data-driven approach is developed to learn appropriate features from the input image sequences. The spatial multiscale features are extracted using completely separable ID layers that allow pipeline stage insertion to enhance..."
);

patents.append("images/patent2.png",
    "A SYSTEM AND METHOD TO IMPROVE POST LVRT/MVRT PERFORMANCE OF WIND TURBINES WITH COUPLING SLIPPAGES",
    "The present invention relates to a system and method to improve post low-voltage ride through/ multi-voltage ride through (LVRT/MVRT) performance of wind turbines with coupling slippages. The proposed control method improves the wind turbine performance without resulting much unbalanced forces. The control is performed with generator power and shaft torque as the control variable. The present invention relates to a system and method to improve post low-voltage ride through/ multi-voltage ride through (LVRT/MVRT) performance of wind turbines with coupling slippages. The proposed control method improves the wind turbine performance without resulting much unbalanced forces..."
);

patents.append("images/patent3.png",
    "A SYSTEM AND METHOD FOR DETECTING CATALASE NEGATIVE LACTOBACILLUS USING DNAZYME AND DIFFERENTIATE IT FROM CATALASE POSITIVE BACTERIA",
    "The present invention relates to a system and method to detect catalase negative Lactobacillus and differentiate it from catalase positive bacteria by visual colorimetric method/absorbance. The peroxidase activity of the DNAzyme has been used to identify/screen catalase negative Lactobacillus in purified cultures from different sources and in probiotic foods. The invention provides easy, cost-effective and reliable method for the detection of hydrogen peroxide production by the bacteria.Keywords: Detect catalase negative Lactobacillus, visual colorimetric method/absorbance, DNAzyme, probiotic foods ..."
);

const PatentImage = document.querySelector(".PatentContent img");
const PatentTitle = document.querySelector(".PatentTitle");
const PatentDesc = document.querySelector(".PatentDesc");

const arrow = document.querySelectorAll(".PatentDiscription .PatentArrow");
const left = arrow[0];
const right = arrow[1];

function renderPatent(){
    const node = patents.current;
    if(!node){
        return;
    }
    PatentImage.src=node.image;
    PatentImage.alt = node.title;
    PatentTitle.textContent=node.title;
    PatentDesc.textContent=node.description;
}

left.addEventListener("click",() => {
    patents.goPrev();
    renderPatent();
});

right.addEventListener("click",()=>{
    patents.goNext();
    renderPatent();
});

