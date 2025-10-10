The private key are two large distinct primes $p,q\equiv 3\pmod{4}$
The public key is $N=pq$ with $\mathcal{M}=\mathcal{C}=\{ 1,\dots N-1 \}$
We encrypt $m\in \mathcal{M}$ as $c=m^{2}\pmod{N}$
We restrict $(m,N)=1$ and at least $m>\sqrt{ N }$
Given $c$, we can solve for $x_{1}^{2}=c\pmod{p}$ and $x_{2}^{2}=c\pmod{q}$
We find $m$ by [[Notes/Chinese Remainder Theorem]]
We can get $4$ solutions out of this, but hopefully only one makes sense.