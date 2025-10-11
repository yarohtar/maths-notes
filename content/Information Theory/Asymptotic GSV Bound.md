[[Information Theory/Asymptotic Information rate]]
$$
\alpha(\delta)\geq 1-H(\delta)
$$
### Proposition
Let $0<\delta<\frac{1}{2}$
Then
1. $\log V(n,\lfloor n\delta \rfloor)\leq nH(\delta)$
2. $\frac{\log A(n,\lfloor n\delta \rfloor)}{n}\geq 1-H(\delta)$
#### Proof
First we prove 1. implies 2. 
[[XNotes/Gilbert-Shannon-Varshamov Bound]] so
$$
\begin{align}
A(n,\lfloor n\delta \rfloor ) & \geq \frac{2^{n}}{V(n,\lfloor n\delta \rfloor -1)}\geq \frac{2^{n}}{V(n,\lfloor n\delta \rfloor )} \\
\log A(n,\lfloor n\delta \rfloor ) & \geq n-\log V(n,\lfloor n\delta  \rfloor ) \\
 & \geq n-nH(\delta)
\end{align}
$$
So
$$
\frac{\log A(n,\lfloor n\delta \rfloor )}{n}\geq 1-H(\delta)
$$
Now we prove 1. 
$$
\begin{align}
1=(\delta+(1-\delta))^{n} & =\sum_{i=0}^{n} {n \choose i}\delta^{i}(1-\delta)^{n-i} \\
 & \geq \sum_{i=0}^{\lfloor n\delta \rfloor }{n \choose i}\delta^{i}(1-\delta)^{n-i} \\
 & =(1-\delta)^{n}\sum_{i=0}^{\lfloor n\delta \rfloor } {n \choose i}\left( \frac{\delta}{1-\delta} \right)^{i} \\
 & \geq(1-\delta)^{n}\sum_{i=0}^{\lfloor n\delta \rfloor } {n \choose i}\left( \frac{\delta}{1-\delta} \right)^{n\delta} \\
 & \geq\delta^{n\delta}(1-\delta)^{n(1-\delta)}V(n,n\delta) \\
0 & \geq n(\delta \log\delta +(1-\delta)\log(1-\delta))+\log V(n,n\delta) \\
\log V(n,\delta) & \leq nH(\delta)
\end{align}
$$
