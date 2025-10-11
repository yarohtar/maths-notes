[[XNotes/Stream Cipher]] where $k_{i}$ are independent random $0,1$
We can use [[XNotes/Linear Feedback Shift Register]] to register the keys
But if the shift register has length $d$, 
then the maximum period is $2^{d}-1$
So we can break by [[Information Theory/Berlekamp-Massey algorithm]]