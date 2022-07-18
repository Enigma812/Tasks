import { ConditionalExpr } from "@angular/compiler";
import { BehaviorSubject, filter, map, Observable, of, ReplaySubject, Subject } from "rxjs";

const number$ = new Observable<number>();
number$.subscribe({
    next: (value: number): void => { console.log('new value = ' + value); },
    error: (err: any): void => { console.error('error = ' + err); },
    complete: (): void => { console.log('completed'); }
});

const transmormedMessage$ = number$.pipe(
    filter((value) => value % 2 === 1),
    map((oddValue) => oddValue * 2),
    map((doubleValue) => Math.pow(doubleValue, 2)),
    map((poweredValue) => poweredValue.toString()),
    map((stringValue) => 'value = ' + stringValue)
);

transmormedMessage$.subscribe((message) => { console.log(message); });

// Порождающий оператор, оператор создания Observalbe 

const string$ = of('hello world!!!', 'fuck off');
string$.subscribe((str) => { console.log(str); });

const censoredString$ = string$.pipe(
    filter((str) => !str.includes('fuck'))
);

censoredString$.subscribe((message) => { console.log(message); })


// Subject

const stringSubject = new Subject<string>();
stringSubject.subscribe((str) => { console.log(str); })

stringSubject.next('hello world!!!');
stringSubject.error('shit happen');
stringSubject.complete();

const numberBSubject = new BehaviorSubject<number>(42);
numberBSubject.subscribe((value) => { console.log(value + value); });

const booleanRSubject = new ReplaySubject<boolean>(3);
booleanRSubject.next(true);
booleanRSubject.subscribe((value) => { console.log('subcribe 1: ' + value); });
booleanRSubject.next(true);
booleanRSubject.subscribe((value) => { console.log('subcribe 2: ' + value); });
booleanRSubject.next(false);
booleanRSubject.subscribe((value) => { console.log('subcribe 3: ' + value); });
booleanRSubject.next(false);
booleanRSubject.subscribe((value) => { console.log('subcribe 4: ' + value); });

const observable$ = booleanRSubject.asObservable();
observable$.subscribe();



