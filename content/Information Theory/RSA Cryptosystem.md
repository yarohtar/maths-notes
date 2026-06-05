Suppose $N=pq$ where $p,q$ are distinct odd primes.
Choose some encrypting exponent $e$ such that $(e,\phi(N))=1$
By Euclid, find $d,k$ such that $de-k\phi(N)=1$
Call $d$ the decrypting exponent.
The public key is $(N,e)$
We encrypt $m\in \mathcal{M}$ as $c=m^{e}\pmod{N}$
The private key is $(N,d)$ and we decrypt $c\in \mathcal{C}$ as $x=c^{d}\pmod{N}$
Then
$x=m^{de}=m^{1+k\phi(N)}=m\pmod{N}$
### Theorem
Suppose we know some $m=k\phi(N)$
Write $o_{p}(x)$ for order of $x$ in $(\mathbb{Z}_{p})^{\times}$
Write $m=2^{a}b$ where $a\geq 1$ and $b$ is odd
Let 
$$
X=\{ x\in(\mathbb{Z}_{p})^{\times}: o_{p}(x^{b})\neq o_{q}(x^{b}) \}
$$
1. If $x\in X$, then there is some $0\leq t<a$ such that $(x^{2^{t}b}-1,N)$ 
   is nontrivial factor of $N$
2. $\lvert X \rvert\geq \frac{1}{2}(p-1)(q-1)$
### Corollary
Finding the private key $(N,d)$ is essentially as difficult as factoring $N$
