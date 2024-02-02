export interface ILevelProps{
  label:string,
  color:string
}
// has number
const hasNumber = (number:string) => /[0-9]/.test(number);
