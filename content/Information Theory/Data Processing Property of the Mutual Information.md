Let $X-Y-Z$ form a [[Information Theory/Markov Chain]].
Then 
$$
\begin{gather}
I(X;Y)\geq I(X;Z) \\
I(X;Y) \geq I(X;Y \mid Z)
\end{gather}
$$
### Proof
$$
\begin{align}
I(X;Y,Z)  & = I(X;Y) + \underbrace{I(X;Z|Y)}_{0} \\
I(X;Y,Z) & = I(X;Z) + I(X;Y\mid Z)
\end{align}
$$

