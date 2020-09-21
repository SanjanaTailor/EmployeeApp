/**
 * UtilityManager for all utility function.
 * the unique singleton instance.
 */
import UIValidation from './validation/UIValidation';
import ConsoleLog from './logger/ConsoleLog';
import ObjectValidation from './validation/ObjectValidation';
export default class UtilityManager {
  //UI Validation instance
  public static uiValidationInstance: UIValidation = new UIValidation();
  
   //object Validation instance
   public static objectValidationInstance: ObjectValidation = new ObjectValidation();

  // console log instance for console log
  public static consoleLogInstance: ConsoleLog = new ConsoleLog();

  public constructor() {}
}
