[[Information Theory/Operational Channel Capacity]] = [[Information Theory/Information Channel Capacity]]
We prove a bunch of propositions leading up to this 
We only actually prove the equality for a [[Information Theory/Binary Symmetric Channel (BSC)]]. 

### Proposition
For a [[Information Theory/Discrete Memoryless Channel (DMC)]] 
$$
\text{operational capacity }\leq \text{ information capacity}
$$
#### Proof
Let $C$ be the [[Information Theory/Information Channel Capacity]]. Suppose we can [[Information Theory/Transmit Reliably]] at rate $R>C$ i.e. there is a sequence of codes $(C_{n})_{n\geq 1}$ with $C_{n}$ of length $n$ and size $\lfloor 2^{nR} \rfloor$ s.t. $\hat{e}(C_{n})\to 0$.
The error probability defined as:
$$
e(C_{n})=\frac{1}{\lvert C_{n} \rvert }\sum_{c\in C_{n}}P(\text{error}|c \text{ sent})
$$
is clearly $e(C_{n})\leq \hat{e}(C_{n})$ (i.e. smaller than the max error probability)

Take random variable $X$ to be the input uniformly distributed over $C_{n}$, and $Y$ be the output when $X$ is transmitted and decoded. 
So, $e(C_{n})=P(X\neq Y)=p$ say
Then by [[Information Theory/Fano's Inequality]] write:
$$
\begin{align}
H(X|Y) & \leq H(p)+p\log(\lvert C_{n} \rvert-1) \\
 & 1+pnR \\
I(X;Y) & =H(X)-H(X|Y) \\
nC & \geq nR-1-(1+pnR) \\
pnR & \geq n(R-C)-2 \\
p & \geq \frac{n(R-C)-2}{nR}\not\to 0
\end{align}
$$
Thus the sequence of codes doesn't exist 

### Proposition
Consider a [[Information Theory/Binary Symmetric Channel (BSC)]] with error probability $p$. Let $R<1-H(p)$.
Then there is a sequence of codes $(C_{n})_{n\geq 1}$ of length $n$ and size $\lfloor 2^{nR} \rfloor$ s.t. $e(C_{n})\to 0$ as $n\to \infty$.
#### Proof
WLOG $p<\frac{1}{2}$ so there is some $\epsilon>0$ s.t. $R<1-H(p+\epsilon)$
Using minimum distance [[Information Theory/Decoding rule]]
Let $m=\lfloor 2^{nR} \rfloor$
We pick an $[n,m]$ [[Information Theory/Binary Code]] $C$ at random 
(i.e. each with probability $\frac{1}{2^{n}\choose m}$) 
Say $C=\{ c_{1},\dots,c_{m} \}$
Choose $1\leq i\leq m$ at random (i.e. each with probability $\frac{1}{m}$) 
We send $c_{i}$ through the channel and get output $Y$ 

It suffices to show 
$$
P(Y\text{ is not detected as }c_{i})\to 0
$$
Let $r=\lfloor n(p+\epsilon) \rfloor$
$$
\begin{gather}
P(Y\text{ is not detected as }c_{i}) \\
\leq P(c_{i}\not\in B(Y,r))+P(B(Y,r)\cap C\supsetneq \{ c_{i} \})\\
=P(d(c_{i},Y)>r)+ P(d(c_{i},Y)\leq r \land d(c_{j},Y)\leq r \text{ for }j\neq i)
\end{gather}
$$
Now consider those two separately 
$$
\begin{align}
P(d(c_{i},Y)>r)  & = P(\text{BSC makes }>r \text{ errors}) \\
 & =P(\text{BSC makes }n(p+\epsilon)\text{ errors}) \\
 & \to 0
\end{align}
$$

If $j\neq i$
$$
\begin{align}
P(c_{j}\in B(Y,r)|c_{i}\in B(Y,r)) & = \frac{V(n,r)-1}{2^{n}-1} \\
 & \leq \frac{V(n,r)}{2^{n}} \\
P(B(Y,r)\cap C\supsetneq \{ c_{i} \})  & \leq \frac{(m-1)V(n,r)}{2^{n}} \\
 & \leq 2^{nR} 2^{nH(p+\epsilon)}2^{-n} \\
 & =2^{n(R-(1-H(p+\epsilon)))} \\
 & \to 0
\end{align}
$$
### Proposition
Consider a [[Information Theory/Binary Symmetric Channel (BSC)]] with error probability $p$. Let $R<1-H(p)$. Then there is a sequence of codes $(C_{n})_{n\geq 1}$ with $C_{n}$ of length $n$, size $\lfloor 2^{nR} \rfloor$ and $\hat{e}(C_{n})\to 0$ as $n\to \infty$ 
#### Proof
Pick $R'$ s.t. $R<R'<1-H(p)$. By previous, we construct a sequence of codes $(C_{n}')_{n\geq 1}$ with $C_{n}'$ of length $n$ and size $\lfloor 2^{nR'} \rfloor$  and $e(C'_{n})\to 0$ as $n\to \infty$
Throwing out the worst half of the codewords in $C_{n}'$ gives a code $C_{n}$ with $\hat{e}(C_{n})\leq 2e(C_{n}')$ so $\hat{e}(C_{n})\to 0$ as $n\to \infty$
Note $C_{n}$ has length $n$ and size $\lfloor 2^{nR'-1} \rfloor>\lfloor 2^{nR} \rfloor$ for $n$ sufficiently large.
So we can replace $C_{n}$ by a subcode of size of $\lfloor 2^{nR} \rfloor$ and still get $\hat{e}(C_{n})\to 0$ as $n\to \infty$ 
