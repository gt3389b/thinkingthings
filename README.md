
For input
```
#ITgAY,#0,P1,214,07,b00,444,-47,#0,K1,300$,#3,B,4.70,1,1,1,1,0,-1$#4,T1,31.48,0$#4,H1,31.48,1890512.00,0$#4,LU,142.86,0$
```

result

```
[ { stackId: 'ITgAY',
    attributes: 
     [ { name: 'mcc', value: '214', type: 'integer' },
       { name: 'mnc', value: '07', type: 'integer' },
       { name: 'lac', value: 'b00', type: 'integer' },
       { name: 'cellid', value: '444', type: 'string' },
       { name: 'dbm', value: '-47', type: 'integer' } ],
    queries: [],
    sleep: {},
    id: '0',
    module: 'P1' },
  { stackId: 'ITgAY',
    attributes: [],
    queries: [],
    sleep: { value: '300', condition: '' },
    id: '0',
    module: 'K1' },
  { stackId: 'ITgAY',
    attributes: 
     [ { name: 'voltage', value: '4.70', type: 'float' },
       { name: 'state', value: '1', type: 'integer' },
       { name: 'charger', value: '1', type: 'integer' },
       { name: 'charging', value: '1', type: 'integer' },
       { name: 'mode', value: '1', type: 'integer' },
       { name: 'desconnection', value: '0', type: 'integer' } ],
    queries: [],
    sleep: { value: '-1', condition: '' },
    id: '3',
    module: 'B' },
  { stackId: 'ITgAY',
    attributes: [ { name: 'temperature', value: '31.48', type: 'float' } ],
    queries: [],
    sleep: { value: '0', condition: '' },
    id: '4',
    module: 'T1' },
  { stackId: 'ITgAY',
    attributes: 
     [ { name: 'humidity', value: '25', type: 'float' },
       { name: 'temperature', value: '31.48', type: 'float' } ],
    queries: [],
    sleep: { value: '0', condition: '' },
    id: '4',
    module: 'H1' },
  { stackId: 'ITgAY',
    attributes: [ { name: 'luminance', value: '142.86', type: 'float' } ],
    queries: [],
    sleep: { value: '0', condition: '' },
    id: '4',
    module: 'LU' } ]
```
