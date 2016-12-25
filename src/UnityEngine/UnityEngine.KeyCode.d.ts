declare namespace UnityEngine {
  class KeyCode {
    // constructors
    private constructor();
    // methods
    GetTypeCode(): any;
    CompareTo(target: any): number;
    ToString(): string;
    ToString(provider: any): string;
    ToString(format: string): string;
    ToString(format: string, provider: any): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
    value__: number;
    static None: UnityEngine.KeyCode;
    static Backspace: UnityEngine.KeyCode;
    static Delete: UnityEngine.KeyCode;
    static Tab: UnityEngine.KeyCode;
    static Clear: UnityEngine.KeyCode;
    static Return: UnityEngine.KeyCode;
    static Pause: UnityEngine.KeyCode;
    static Escape: UnityEngine.KeyCode;
    static Space: UnityEngine.KeyCode;
    static Keypad0: UnityEngine.KeyCode;
    static Keypad1: UnityEngine.KeyCode;
    static Keypad2: UnityEngine.KeyCode;
    static Keypad3: UnityEngine.KeyCode;
    static Keypad4: UnityEngine.KeyCode;
    static Keypad5: UnityEngine.KeyCode;
    static Keypad6: UnityEngine.KeyCode;
    static Keypad7: UnityEngine.KeyCode;
    static Keypad8: UnityEngine.KeyCode;
    static Keypad9: UnityEngine.KeyCode;
    static KeypadPeriod: UnityEngine.KeyCode;
    static KeypadDivide: UnityEngine.KeyCode;
    static KeypadMultiply: UnityEngine.KeyCode;
    static KeypadMinus: UnityEngine.KeyCode;
    static KeypadPlus: UnityEngine.KeyCode;
    static KeypadEnter: UnityEngine.KeyCode;
    static KeypadEquals: UnityEngine.KeyCode;
    static UpArrow: UnityEngine.KeyCode;
    static DownArrow: UnityEngine.KeyCode;
    static RightArrow: UnityEngine.KeyCode;
    static LeftArrow: UnityEngine.KeyCode;
    static Insert: UnityEngine.KeyCode;
    static Home: UnityEngine.KeyCode;
    static End: UnityEngine.KeyCode;
    static PageUp: UnityEngine.KeyCode;
    static PageDown: UnityEngine.KeyCode;
    static F1: UnityEngine.KeyCode;
    static F2: UnityEngine.KeyCode;
    static F3: UnityEngine.KeyCode;
    static F4: UnityEngine.KeyCode;
    static F5: UnityEngine.KeyCode;
    static F6: UnityEngine.KeyCode;
    static F7: UnityEngine.KeyCode;
    static F8: UnityEngine.KeyCode;
    static F9: UnityEngine.KeyCode;
    static F10: UnityEngine.KeyCode;
    static F11: UnityEngine.KeyCode;
    static F12: UnityEngine.KeyCode;
    static F13: UnityEngine.KeyCode;
    static F14: UnityEngine.KeyCode;
    static F15: UnityEngine.KeyCode;
    static Alpha0: UnityEngine.KeyCode;
    static Alpha1: UnityEngine.KeyCode;
    static Alpha2: UnityEngine.KeyCode;
    static Alpha3: UnityEngine.KeyCode;
    static Alpha4: UnityEngine.KeyCode;
    static Alpha5: UnityEngine.KeyCode;
    static Alpha6: UnityEngine.KeyCode;
    static Alpha7: UnityEngine.KeyCode;
    static Alpha8: UnityEngine.KeyCode;
    static Alpha9: UnityEngine.KeyCode;
    static Exclaim: UnityEngine.KeyCode;
    static DoubleQuote: UnityEngine.KeyCode;
    static Hash: UnityEngine.KeyCode;
    static Dollar: UnityEngine.KeyCode;
    static Ampersand: UnityEngine.KeyCode;
    static Quote: UnityEngine.KeyCode;
    static LeftParen: UnityEngine.KeyCode;
    static RightParen: UnityEngine.KeyCode;
    static Asterisk: UnityEngine.KeyCode;
    static Plus: UnityEngine.KeyCode;
    static Comma: UnityEngine.KeyCode;
    static Minus: UnityEngine.KeyCode;
    static Period: UnityEngine.KeyCode;
    static Slash: UnityEngine.KeyCode;
    static Colon: UnityEngine.KeyCode;
    static Semicolon: UnityEngine.KeyCode;
    static Less: UnityEngine.KeyCode;
    static Equals: UnityEngine.KeyCode;
    static Greater: UnityEngine.KeyCode;
    static Question: UnityEngine.KeyCode;
    static At: UnityEngine.KeyCode;
    static LeftBracket: UnityEngine.KeyCode;
    static Backslash: UnityEngine.KeyCode;
    static RightBracket: UnityEngine.KeyCode;
    static Caret: UnityEngine.KeyCode;
    static Underscore: UnityEngine.KeyCode;
    static BackQuote: UnityEngine.KeyCode;
    static A: UnityEngine.KeyCode;
    static B: UnityEngine.KeyCode;
    static C: UnityEngine.KeyCode;
    static D: UnityEngine.KeyCode;
    static E: UnityEngine.KeyCode;
    static F: UnityEngine.KeyCode;
    static G: UnityEngine.KeyCode;
    static H: UnityEngine.KeyCode;
    static I: UnityEngine.KeyCode;
    static J: UnityEngine.KeyCode;
    static K: UnityEngine.KeyCode;
    static L: UnityEngine.KeyCode;
    static M: UnityEngine.KeyCode;
    static N: UnityEngine.KeyCode;
    static O: UnityEngine.KeyCode;
    static P: UnityEngine.KeyCode;
    static Q: UnityEngine.KeyCode;
    static R: UnityEngine.KeyCode;
    static S: UnityEngine.KeyCode;
    static T: UnityEngine.KeyCode;
    static U: UnityEngine.KeyCode;
    static V: UnityEngine.KeyCode;
    static W: UnityEngine.KeyCode;
    static X: UnityEngine.KeyCode;
    static Y: UnityEngine.KeyCode;
    static Z: UnityEngine.KeyCode;
    static Numlock: UnityEngine.KeyCode;
    static CapsLock: UnityEngine.KeyCode;
    static ScrollLock: UnityEngine.KeyCode;
    static RightShift: UnityEngine.KeyCode;
    static LeftShift: UnityEngine.KeyCode;
    static RightControl: UnityEngine.KeyCode;
    static LeftControl: UnityEngine.KeyCode;
    static RightAlt: UnityEngine.KeyCode;
    static LeftAlt: UnityEngine.KeyCode;
    static LeftCommand: UnityEngine.KeyCode;
    static LeftApple: UnityEngine.KeyCode;
    static LeftWindows: UnityEngine.KeyCode;
    static RightCommand: UnityEngine.KeyCode;
    static RightApple: UnityEngine.KeyCode;
    static RightWindows: UnityEngine.KeyCode;
    static AltGr: UnityEngine.KeyCode;
    static Help: UnityEngine.KeyCode;
    static Print: UnityEngine.KeyCode;
    static SysReq: UnityEngine.KeyCode;
    static Break: UnityEngine.KeyCode;
    static Menu: UnityEngine.KeyCode;
    static Mouse0: UnityEngine.KeyCode;
    static Mouse1: UnityEngine.KeyCode;
    static Mouse2: UnityEngine.KeyCode;
    static Mouse3: UnityEngine.KeyCode;
    static Mouse4: UnityEngine.KeyCode;
    static Mouse5: UnityEngine.KeyCode;
    static Mouse6: UnityEngine.KeyCode;
    static JoystickButton0: UnityEngine.KeyCode;
    static JoystickButton1: UnityEngine.KeyCode;
    static JoystickButton2: UnityEngine.KeyCode;
    static JoystickButton3: UnityEngine.KeyCode;
    static JoystickButton4: UnityEngine.KeyCode;
    static JoystickButton5: UnityEngine.KeyCode;
    static JoystickButton6: UnityEngine.KeyCode;
    static JoystickButton7: UnityEngine.KeyCode;
    static JoystickButton8: UnityEngine.KeyCode;
    static JoystickButton9: UnityEngine.KeyCode;
    static JoystickButton10: UnityEngine.KeyCode;
    static JoystickButton11: UnityEngine.KeyCode;
    static JoystickButton12: UnityEngine.KeyCode;
    static JoystickButton13: UnityEngine.KeyCode;
    static JoystickButton14: UnityEngine.KeyCode;
    static JoystickButton15: UnityEngine.KeyCode;
    static JoystickButton16: UnityEngine.KeyCode;
    static JoystickButton17: UnityEngine.KeyCode;
    static JoystickButton18: UnityEngine.KeyCode;
    static JoystickButton19: UnityEngine.KeyCode;
    static Joystick1Button0: UnityEngine.KeyCode;
    static Joystick1Button1: UnityEngine.KeyCode;
    static Joystick1Button2: UnityEngine.KeyCode;
    static Joystick1Button3: UnityEngine.KeyCode;
    static Joystick1Button4: UnityEngine.KeyCode;
    static Joystick1Button5: UnityEngine.KeyCode;
    static Joystick1Button6: UnityEngine.KeyCode;
    static Joystick1Button7: UnityEngine.KeyCode;
    static Joystick1Button8: UnityEngine.KeyCode;
    static Joystick1Button9: UnityEngine.KeyCode;
    static Joystick1Button10: UnityEngine.KeyCode;
    static Joystick1Button11: UnityEngine.KeyCode;
    static Joystick1Button12: UnityEngine.KeyCode;
    static Joystick1Button13: UnityEngine.KeyCode;
    static Joystick1Button14: UnityEngine.KeyCode;
    static Joystick1Button15: UnityEngine.KeyCode;
    static Joystick1Button16: UnityEngine.KeyCode;
    static Joystick1Button17: UnityEngine.KeyCode;
    static Joystick1Button18: UnityEngine.KeyCode;
    static Joystick1Button19: UnityEngine.KeyCode;
    static Joystick2Button0: UnityEngine.KeyCode;
    static Joystick2Button1: UnityEngine.KeyCode;
    static Joystick2Button2: UnityEngine.KeyCode;
    static Joystick2Button3: UnityEngine.KeyCode;
    static Joystick2Button4: UnityEngine.KeyCode;
    static Joystick2Button5: UnityEngine.KeyCode;
    static Joystick2Button6: UnityEngine.KeyCode;
    static Joystick2Button7: UnityEngine.KeyCode;
    static Joystick2Button8: UnityEngine.KeyCode;
    static Joystick2Button9: UnityEngine.KeyCode;
    static Joystick2Button10: UnityEngine.KeyCode;
    static Joystick2Button11: UnityEngine.KeyCode;
    static Joystick2Button12: UnityEngine.KeyCode;
    static Joystick2Button13: UnityEngine.KeyCode;
    static Joystick2Button14: UnityEngine.KeyCode;
    static Joystick2Button15: UnityEngine.KeyCode;
    static Joystick2Button16: UnityEngine.KeyCode;
    static Joystick2Button17: UnityEngine.KeyCode;
    static Joystick2Button18: UnityEngine.KeyCode;
    static Joystick2Button19: UnityEngine.KeyCode;
    static Joystick3Button0: UnityEngine.KeyCode;
    static Joystick3Button1: UnityEngine.KeyCode;
    static Joystick3Button2: UnityEngine.KeyCode;
    static Joystick3Button3: UnityEngine.KeyCode;
    static Joystick3Button4: UnityEngine.KeyCode;
    static Joystick3Button5: UnityEngine.KeyCode;
    static Joystick3Button6: UnityEngine.KeyCode;
    static Joystick3Button7: UnityEngine.KeyCode;
    static Joystick3Button8: UnityEngine.KeyCode;
    static Joystick3Button9: UnityEngine.KeyCode;
    static Joystick3Button10: UnityEngine.KeyCode;
    static Joystick3Button11: UnityEngine.KeyCode;
    static Joystick3Button12: UnityEngine.KeyCode;
    static Joystick3Button13: UnityEngine.KeyCode;
    static Joystick3Button14: UnityEngine.KeyCode;
    static Joystick3Button15: UnityEngine.KeyCode;
    static Joystick3Button16: UnityEngine.KeyCode;
    static Joystick3Button17: UnityEngine.KeyCode;
    static Joystick3Button18: UnityEngine.KeyCode;
    static Joystick3Button19: UnityEngine.KeyCode;
    static Joystick4Button0: UnityEngine.KeyCode;
    static Joystick4Button1: UnityEngine.KeyCode;
    static Joystick4Button2: UnityEngine.KeyCode;
    static Joystick4Button3: UnityEngine.KeyCode;
    static Joystick4Button4: UnityEngine.KeyCode;
    static Joystick4Button5: UnityEngine.KeyCode;
    static Joystick4Button6: UnityEngine.KeyCode;
    static Joystick4Button7: UnityEngine.KeyCode;
    static Joystick4Button8: UnityEngine.KeyCode;
    static Joystick4Button9: UnityEngine.KeyCode;
    static Joystick4Button10: UnityEngine.KeyCode;
    static Joystick4Button11: UnityEngine.KeyCode;
    static Joystick4Button12: UnityEngine.KeyCode;
    static Joystick4Button13: UnityEngine.KeyCode;
    static Joystick4Button14: UnityEngine.KeyCode;
    static Joystick4Button15: UnityEngine.KeyCode;
    static Joystick4Button16: UnityEngine.KeyCode;
    static Joystick4Button17: UnityEngine.KeyCode;
    static Joystick4Button18: UnityEngine.KeyCode;
    static Joystick4Button19: UnityEngine.KeyCode;
    static Joystick5Button0: UnityEngine.KeyCode;
    static Joystick5Button1: UnityEngine.KeyCode;
    static Joystick5Button2: UnityEngine.KeyCode;
    static Joystick5Button3: UnityEngine.KeyCode;
    static Joystick5Button4: UnityEngine.KeyCode;
    static Joystick5Button5: UnityEngine.KeyCode;
    static Joystick5Button6: UnityEngine.KeyCode;
    static Joystick5Button7: UnityEngine.KeyCode;
    static Joystick5Button8: UnityEngine.KeyCode;
    static Joystick5Button9: UnityEngine.KeyCode;
    static Joystick5Button10: UnityEngine.KeyCode;
    static Joystick5Button11: UnityEngine.KeyCode;
    static Joystick5Button12: UnityEngine.KeyCode;
    static Joystick5Button13: UnityEngine.KeyCode;
    static Joystick5Button14: UnityEngine.KeyCode;
    static Joystick5Button15: UnityEngine.KeyCode;
    static Joystick5Button16: UnityEngine.KeyCode;
    static Joystick5Button17: UnityEngine.KeyCode;
    static Joystick5Button18: UnityEngine.KeyCode;
    static Joystick5Button19: UnityEngine.KeyCode;
    static Joystick6Button0: UnityEngine.KeyCode;
    static Joystick6Button1: UnityEngine.KeyCode;
    static Joystick6Button2: UnityEngine.KeyCode;
    static Joystick6Button3: UnityEngine.KeyCode;
    static Joystick6Button4: UnityEngine.KeyCode;
    static Joystick6Button5: UnityEngine.KeyCode;
    static Joystick6Button6: UnityEngine.KeyCode;
    static Joystick6Button7: UnityEngine.KeyCode;
    static Joystick6Button8: UnityEngine.KeyCode;
    static Joystick6Button9: UnityEngine.KeyCode;
    static Joystick6Button10: UnityEngine.KeyCode;
    static Joystick6Button11: UnityEngine.KeyCode;
    static Joystick6Button12: UnityEngine.KeyCode;
    static Joystick6Button13: UnityEngine.KeyCode;
    static Joystick6Button14: UnityEngine.KeyCode;
    static Joystick6Button15: UnityEngine.KeyCode;
    static Joystick6Button16: UnityEngine.KeyCode;
    static Joystick6Button17: UnityEngine.KeyCode;
    static Joystick6Button18: UnityEngine.KeyCode;
    static Joystick6Button19: UnityEngine.KeyCode;
    static Joystick7Button0: UnityEngine.KeyCode;
    static Joystick7Button1: UnityEngine.KeyCode;
    static Joystick7Button2: UnityEngine.KeyCode;
    static Joystick7Button3: UnityEngine.KeyCode;
    static Joystick7Button4: UnityEngine.KeyCode;
    static Joystick7Button5: UnityEngine.KeyCode;
    static Joystick7Button6: UnityEngine.KeyCode;
    static Joystick7Button7: UnityEngine.KeyCode;
    static Joystick7Button8: UnityEngine.KeyCode;
    static Joystick7Button9: UnityEngine.KeyCode;
    static Joystick7Button10: UnityEngine.KeyCode;
    static Joystick7Button11: UnityEngine.KeyCode;
    static Joystick7Button12: UnityEngine.KeyCode;
    static Joystick7Button13: UnityEngine.KeyCode;
    static Joystick7Button14: UnityEngine.KeyCode;
    static Joystick7Button15: UnityEngine.KeyCode;
    static Joystick7Button16: UnityEngine.KeyCode;
    static Joystick7Button17: UnityEngine.KeyCode;
    static Joystick7Button18: UnityEngine.KeyCode;
    static Joystick7Button19: UnityEngine.KeyCode;
    static Joystick8Button0: UnityEngine.KeyCode;
    static Joystick8Button1: UnityEngine.KeyCode;
    static Joystick8Button2: UnityEngine.KeyCode;
    static Joystick8Button3: UnityEngine.KeyCode;
    static Joystick8Button4: UnityEngine.KeyCode;
    static Joystick8Button5: UnityEngine.KeyCode;
    static Joystick8Button6: UnityEngine.KeyCode;
    static Joystick8Button7: UnityEngine.KeyCode;
    static Joystick8Button8: UnityEngine.KeyCode;
    static Joystick8Button9: UnityEngine.KeyCode;
    static Joystick8Button10: UnityEngine.KeyCode;
    static Joystick8Button11: UnityEngine.KeyCode;
    static Joystick8Button12: UnityEngine.KeyCode;
    static Joystick8Button13: UnityEngine.KeyCode;
    static Joystick8Button14: UnityEngine.KeyCode;
    static Joystick8Button15: UnityEngine.KeyCode;
    static Joystick8Button16: UnityEngine.KeyCode;
    static Joystick8Button17: UnityEngine.KeyCode;
    static Joystick8Button18: UnityEngine.KeyCode;
    static Joystick8Button19: UnityEngine.KeyCode;
  }
}