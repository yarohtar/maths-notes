The operational channel capacity is the supremum over all [[Notes/Transmit Reliably\|reliable transmission]] rates.

### Lemma
A [[Notes/Binary Symmetric Channel (BSC)]] with error probability $p<\frac{1}{4}$ has nonzero capacity.
#### Proof
Let $\delta$ be such that $2p<\delta<\frac{1}{2}$
We claim that we can [[Notes/Transmit Reliably]] at rate $R=1-H(\delta)>0$
Let $C_{n}$ have [[Notes/Size of Largest Code]] $\lvert C_{n} \rvert=A(n,\lfloor n\delta \rfloor)$
Then
$$
\lvert C_{n} \rvert \geq 2^{-n(1-H(\delta))} =2^{nR}
$$
Replacing $C_{n}$ with a subcode, we can assume $\lvert C_{n} \rvert=2^{nR}$
The [[Notes/Maximum Error Probability]] satisfies:
$$
\hat{e}(C_{n})\leq \mathbb{P}\left( \left\lfloor  \frac{\lfloor n\delta \rfloor -1}{2}  \right\rfloor \text{ errors in }n \text{ uses} \right)
$$
Let $\epsilon>0$ such that $p+\epsilon<\frac{\delta}{2}$.
Then for large $n$ we find $\frac{n\delta-1}{2}>n(p+\epsilon)$.
So the above probability goes to 0 by [[Notes/Weak Law of Large Numbers]] and:
$$
\lim_{n\to \infty}\hat{e}(C_{n})=0
$$
