A DMC is a [[Information Theory/Communication Channel]] for which 
$$
P_{ij}=P(b_{j}\text{ received}\mid a_{i}\text{ sent})
$$
is the same each time the channel is used, it is independent of all past uses

[[Information Theory/Binary Symmetric Channel (BSC)]]
[[Information Theory/Binary Erasure Channel]]

### Lemma
The $n$-th [[Information Theory/Communication Channel Extension]] of a DMC with [[XNotes/Information Channel Capacity]] $C$ has information capacity $nC$
#### Proof
We take rv input $X_{1}\dots X_{n}=X$ and rv output $Y_{1}\dots Y_{n}=Y$
Now 
$$
H(Y|X)=\sum_{x\in X}P(X=x)H(Y|X=x)
$$
Since the channel is memoryless 
$$
H(Y|X=x)=\sum_{i}H(Y_{i}|X=x)=\sum_{i}H(Y_{i}|X_{i})
$$
So,
$$
\begin{align}
H(Y|X) & =\sum_{x}P(X=x)\sum_{i}H(Y_{i}|X_{i}=x_{i}) \\
 & =\sum_{i}\sum_{u}H(Y_{i}|X=u)P(X_{i}=u)  \\
 & =\sum_{i=1}^{n}H(Y_{i}|X_{i})
\end{align}
$$
Thus
$$
\begin{align}
I(X;Y) & =H(Y)-H(Y|X) \\
 & \leq \sum_{i}H(Y_{i})-H(Y_{i}|X_{i}) \\
 & =\sum_{i=1}^{n}I(X_{i};Y_{i}) \\
 & \leq nC
\end{align}
$$
Equality is if $Y_{i}$ are independent. This can only be achieved for $X_{i}$ independent and choosing the probability distribution s.t. $I(X_{i};Y_{i})=C$