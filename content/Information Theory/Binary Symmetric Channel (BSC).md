[[Information Theory/Discrete Memoryless Channel (DMC)]] which has $\Sigma_{1}=\Sigma_{2}=\{ 0,1 \}$ with probability $0\leq p\leq 1$ and [[Information Theory/Channel Matrix]]
$$
\begin{pmatrix}
1-p & p \\
p & 1-p
\end{pmatrix}
$$
ie $p$ is probability a symbol is mistransmitted.

### Lemma
Let $\epsilon>0$. A [[Information Theory/Binary Symmetric Channel (BSC)]] with error probability $p$ is used to send $n$ digits. Then
$$
P(\text{BSC makes }\geq n(p+\epsilon) \text{ errors})\to 0
$$
as $n\to \infty$
#### Proof
Let 
$$
\mu_{i}=\begin{cases}
1 & \text{if }i\text{th digit is mistransmitted} \\
0 & \text{otherwise}
\end{cases}
$$
$\mu_{1},\mu_{2},\dots$ are iid variables
$$
\begin{align}
P(\text{BSC makes }\geq n(p+\epsilon)\text{ errors}) & =P\left( \sum \mu_{i}\geq n(p+\epsilon) \right) \\
 & \leq P\left( \left\lvert  \frac{1}{n}\sum \mu_{i}-p  \right\rvert \geq \epsilon \right)\to 0
\end{align}
$$
by weak law of large numbers.

### Proposition
The capacity of a [[Information Theory/Binary Symmetric Channel (BSC)]] with error probability $p<\frac{1}{4}$ is $\neq 0$

#### Proof
Choose $\delta$ with $2p<\delta<\frac{1}{2}$
We prove reliable encoding at rate $R=1-H(\delta)>0$
Let $C_{n}$ be the largest code of length $n$ and 
??????????? RACHEL PLEASE STOP HIDING YOUR BLACKBOARDS!!!!
12 ferburary lecture

Replacing $C_{n}$ by subcode gives $\lvert C_{n} \rvert=\lfloor 2^{nR} \rfloor$ and still minimum distance $\geq \lfloor n\delta \rfloor$
Using minimum distance decoding 
$$
\begin{align}
\hat{e}(C_{n}) & \leq P\left( \text{BSC makes }\geq \left\lfloor  \frac{\lfloor n\delta \rfloor -1}{2}  \right\rfloor +1 \text{ errors} \right) \\
 & \leq P\left( \text{BSC makes }\geq \frac{n\delta-1}{2}\text{ errors} \right)
\end{align}
$$
Pick $\epsilon>0$ st $p+\epsilon<\frac{\delta}{2}$
Then $\frac{n\delta-1}{2}=n\left( \frac{\delta}{2}-\frac{1}{2n} \right)>n(p+\epsilon)$ for $n$ sufficiently large
Therefore
$$
\hat{e}(C_{n})\leq P(\text{BSC makes }\geq n(p+\epsilon)\text{ errors})\to 0
$$
as $n\to \infty$ by lemma