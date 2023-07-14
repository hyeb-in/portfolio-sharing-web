import { educationAuthService } from "../services/educationService";

const postEducation = async (req,res,next) =>{
    try {
        const author = req.currentUserId;
        const { schoolName, major, crnt } = req.body;

    const newEducation = await educationAuthService.addEducation(
            schoolName,
            major,
            crnt,
            author
        );
        res.status(201).json(newEducation);
    } catch (error) {
        next(error);
    }
}

const userGetEducation = async (req,res,next)=>{
    try {

        const education = await educationAuthService.getEducation(req.currentUserId);

        res.status(200).send(education);
    } catch (error) {
        next(error);
    }
}

const getEducation = async (req,res,next) => {
    try{
        const educationId = await educationAuthService.getEducation(req.params.id);
        res.status(200).send(educationId);
    }catch(error){
        next(error);
    }
}

const putEducation = async (req,res,next) => {
    try {
        const educationId = req.params.id;
        const schoolName = req.body.schoolName ?? null;
        const major = req.body.major ?? null;
        const crnt = req.body.crnt ?? null;


    const toUpdate ={schoolName, major, crnt};
    
    const updatedEducation = await educationAuthService.setEducation({educationId,toUpdate});

    

        res.status(201).send(updatedEducation);
    } catch (error) {
        next(error);
    }
}

const deleteEducation = async (req,res,next) => {
    try{

        const deleteEducation = await educationAuthService.deleteEducation(req.params.id);
        res.status(200).send(deleteEducation);
    }catch(error){
        next(error);
    }
}

export { postEducation, userGetEducation, getEducation, putEducation, deleteEducation};