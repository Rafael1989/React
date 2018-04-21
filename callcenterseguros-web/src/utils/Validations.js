
class Validations {

    constructor(){

        this._roles = {
            cpf: this.CPFValidation
        };
    }

    get roles(){

        return this._roles;
    }
    /**
     * 
     * @param {String} strCPF  Valida o digito verificador.
     */
    CPFValidation(strCPF){
       
        let soma;
        let resto;
        soma = 0;
        strCPF = strCPF.replace(/\./g,'').replace('-','');
        if (strCPF === "00000000000"){
            return false;
        }
        
        for (let i=1; i<=9; i++) {
            soma = soma + parseInt(strCPF.substring(i-1, i),0) * (11 - i);
        }
        resto = (soma * 10) % 11;
        
        if ((resto === 10) || (resto === 11))  {
            resto = 0;
        }
        if (resto !== parseInt(strCPF.substring(9, 10),0) ){
            return false;
        } 
        
        soma = 0;
        for (let i = 1; i <= 10; i++) {
            soma = soma + parseInt(strCPF.substring(i-1, i),0) * (12 - i);
        }
        resto = (soma * 10) % 11;
        
        if ((resto === 10) || (resto === 11)){
            resto = 0; 
        }  
        if (resto !== parseInt(strCPF.substring(10, 11),0 ) ) {
            return false;
        }
        return true;
    }

    /**
     * 
     * @param {String} rule Valida o um valor de acordo com a role passada.  
     */
    valid(rule,value){

        return this._roles[rule](value);
    }
}

export default Validations;