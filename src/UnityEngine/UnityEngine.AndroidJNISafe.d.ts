declare namespace UnityEngine {
  class AndroidJNISafe {
    // constructors
    constructor();
    // methods
    static CheckException(): void;
    static DeleteGlobalRef(globalref: any): void;
    static DeleteLocalRef(localref: any): void;
    static NewStringUTF(bytes: string): any;
    static GetStringUTFChars(str: any): string;
    static GetObjectClass(ptr: any): any;
    static GetStaticMethodID(clazz: any, name: string, sig: string): any;
    static GetMethodID(obj: any, name: string, sig: string): any;
    static GetFieldID(clazz: any, name: string, sig: string): any;
    static GetStaticFieldID(clazz: any, name: string, sig: string): any;
    static FromReflectedMethod(refMethod: any): any;
    static FromReflectedField(refField: any): any;
    static FindClass(name: string): any;
    static NewObject(clazz: any, methodID: any, args: UnityEngine.jvalue[]): any;
    static SetStaticObjectField(clazz: any, fieldID: any, val: any): void;
    static SetStaticStringField(clazz: any, fieldID: any, val: string): void;
    static SetStaticCharField(clazz: any, fieldID: any, val: any): void;
    static SetStaticDoubleField(clazz: any, fieldID: any, val: number): void;
    static SetStaticFloatField(clazz: any, fieldID: any, val: number): void;
    static SetStaticLongField(clazz: any, fieldID: any, val: number): void;
    static SetStaticShortField(clazz: any, fieldID: any, val: number): void;
    static SetStaticByteField(clazz: any, fieldID: any, val: number): void;
    static SetStaticBooleanField(clazz: any, fieldID: any, val: boolean): void;
    static SetStaticIntField(clazz: any, fieldID: any, val: number): void;
    static GetStaticObjectField(clazz: any, fieldID: any): any;
    static GetStaticStringField(clazz: any, fieldID: any): string;
    static GetStaticCharField(clazz: any, fieldID: any): any;
    static GetStaticDoubleField(clazz: any, fieldID: any): number;
    static GetStaticFloatField(clazz: any, fieldID: any): number;
    static GetStaticLongField(clazz: any, fieldID: any): number;
    static GetStaticShortField(clazz: any, fieldID: any): number;
    static GetStaticByteField(clazz: any, fieldID: any): number;
    static GetStaticBooleanField(clazz: any, fieldID: any): boolean;
    static GetStaticIntField(clazz: any, fieldID: any): number;
    static CallStaticVoidMethod(clazz: any, methodID: any, args: UnityEngine.jvalue[]): void;
    static CallStaticObjectMethod(clazz: any, methodID: any, args: UnityEngine.jvalue[]): any;
    static CallStaticStringMethod(clazz: any, methodID: any, args: UnityEngine.jvalue[]): string;
    static CallStaticCharMethod(clazz: any, methodID: any, args: UnityEngine.jvalue[]): any;
    static CallStaticDoubleMethod(clazz: any, methodID: any, args: UnityEngine.jvalue[]): number;
    static CallStaticFloatMethod(clazz: any, methodID: any, args: UnityEngine.jvalue[]): number;
    static CallStaticLongMethod(clazz: any, methodID: any, args: UnityEngine.jvalue[]): number;
    static CallStaticShortMethod(clazz: any, methodID: any, args: UnityEngine.jvalue[]): number;
    static CallStaticByteMethod(clazz: any, methodID: any, args: UnityEngine.jvalue[]): number;
    static CallStaticBooleanMethod(clazz: any, methodID: any, args: UnityEngine.jvalue[]): boolean;
    static CallStaticIntMethod(clazz: any, methodID: any, args: UnityEngine.jvalue[]): number;
    static SetObjectField(obj: any, fieldID: any, val: any): void;
    static SetStringField(obj: any, fieldID: any, val: string): void;
    static SetCharField(obj: any, fieldID: any, val: any): void;
    static SetDoubleField(obj: any, fieldID: any, val: number): void;
    static SetFloatField(obj: any, fieldID: any, val: number): void;
    static SetLongField(obj: any, fieldID: any, val: number): void;
    static SetShortField(obj: any, fieldID: any, val: number): void;
    static SetByteField(obj: any, fieldID: any, val: number): void;
    static SetBooleanField(obj: any, fieldID: any, val: boolean): void;
    static SetIntField(obj: any, fieldID: any, val: number): void;
    static GetObjectField(obj: any, fieldID: any): any;
    static GetStringField(obj: any, fieldID: any): string;
    static GetCharField(obj: any, fieldID: any): any;
    static GetDoubleField(obj: any, fieldID: any): number;
    static GetFloatField(obj: any, fieldID: any): number;
    static GetLongField(obj: any, fieldID: any): number;
    static GetShortField(obj: any, fieldID: any): number;
    static GetByteField(obj: any, fieldID: any): number;
    static GetBooleanField(obj: any, fieldID: any): boolean;
    static GetIntField(obj: any, fieldID: any): number;
    static CallVoidMethod(obj: any, methodID: any, args: UnityEngine.jvalue[]): void;
    static CallObjectMethod(obj: any, methodID: any, args: UnityEngine.jvalue[]): any;
    static CallStringMethod(obj: any, methodID: any, args: UnityEngine.jvalue[]): string;
    static CallCharMethod(obj: any, methodID: any, args: UnityEngine.jvalue[]): any;
    static CallDoubleMethod(obj: any, methodID: any, args: UnityEngine.jvalue[]): number;
    static CallFloatMethod(obj: any, methodID: any, args: UnityEngine.jvalue[]): number;
    static CallLongMethod(obj: any, methodID: any, args: UnityEngine.jvalue[]): number;
    static CallShortMethod(obj: any, methodID: any, args: UnityEngine.jvalue[]): number;
    static CallByteMethod(obj: any, methodID: any, args: UnityEngine.jvalue[]): number;
    static CallBooleanMethod(obj: any, methodID: any, args: UnityEngine.jvalue[]): boolean;
    static CallIntMethod(obj: any, methodID: any, args: UnityEngine.jvalue[]): number;
    static FromObjectArray(array: any): any[];
    static FromCharArray(array: any): any[];
    static FromDoubleArray(array: any): number[];
    static FromFloatArray(array: any): number[];
    static FromLongArray(array: any): number[];
    static FromShortArray(array: any): number[];
    static FromByteArray(array: any): number[];
    static FromBooleanArray(array: any): boolean[];
    static FromIntArray(array: any): number[];
    static ToObjectArray(array: any[]): any;
    static ToObjectArray(array: any[], type: any): any;
    static ToCharArray(array: any[]): any;
    static ToDoubleArray(array: number[]): any;
    static ToFloatArray(array: number[]): any;
    static ToLongArray(array: number[]): any;
    static ToShortArray(array: number[]): any;
    static ToByteArray(array: number[]): any;
    static ToBooleanArray(array: boolean[]): any;
    static ToIntArray(array: number[]): any;
    static GetObjectArrayElement(array: any, index: number): any;
    static GetArrayLength(array: any): number;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
