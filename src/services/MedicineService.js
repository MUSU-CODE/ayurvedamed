import axios from 'axios'

const medi = 'http://localhost:8081/medicine';

class MedicineService{

    getAllMedicines(){
        return axios.get(medi)
    }

    createMedicine(medicine){
        return axios.post(medi, medicine)
    }

    getMedicineById(medicineId){
        return axios.get(medi + '/' + medicineId);
    }

    updateMedicine(medicineId, medicine){
        return axios.put(medi + '/' +medicineId, medicine);
    }

    deleteMedicine(medicineId){
        return axios.delete(medi + '/' + medicineId);
    }
}

export default new MedicineService();