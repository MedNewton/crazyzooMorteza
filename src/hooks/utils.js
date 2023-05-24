
export function summaryOwner(owner){
    if(!owner) return "connectWallet";
    var firstCharacters = owner.substring(0, 4);
    var lastCharacters = owner.substring(owner.length - 4);
    return firstCharacters + "..."  + lastCharacters;
  }


  export const num = (result, decimals) => {
    if(result.data){
        return Number(result.data)/decimals;
    }else{
        return 0;
    }
}

export const str = (number) => number.toLocaleString('fullwide', {useGrouping:false})