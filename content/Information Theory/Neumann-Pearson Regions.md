Let $P$ and $Q$ be two distributions on which we want to do a [[Information Theory/Hypothesis Test]]
given $n$ data samples $x_{1}^{n}$.
Consider the regions:
$$
B_{NP} = \left\{  x_{1}^{n} : \frac{ P^{n}(x_{1}^{n}) }{ Q^{n}(x_{1}^{n}) } \geq T   \right\}
$$
for some $T>0$ with error probabilities
$$
\begin{gather}
e_{1,NP}^{(n)} = Q^{n}(B_{NP}) \\
e_{2,NP}^{(n)} =P^{n}(B_{NP}^{C})
\end{gather}
$$
Then the decision region $B_{NP}$ is optimal:
For any other $B_{n}\subseteq A^{n}$ if $e_{2}^{(n)}=P^{n}(B_{n}^{C})$ is as good as $e_{2,NP}^{(n)}$:
$$
e_{2}^{(n)} \leq e_{2,NP} ^{(n)}
$$
then necessarily:
$$
e_{1}^{(n)} \geq e_{1,NP} ^{(n)}
$$
#### Proof
Observe the inequality that always holds:
$$
(1_{B_{NP}}(x_{1}^{n}) - 1_{B_{n}}(x_{1}^{n})) (P^{n}(x_{1}^{n})-TQ^{n}(x_{1}^{n})) \geq 0
$$
Multiplying out we find
$$
T(e_{1}^{(n)} - e_{1,NP}^{(n)}) - (e_{2,NP}^{(n)} - e_{2}^{(n)}) \geq 0
$$
### Proposition
Let $\hat{P}^{n}$ be the empirical distribution from samples $x_{1}^{n}$.
The Neumann-Pearson decision region can be expressed
in terms of [[Information Theory/Relative Entropy]] as:
$$
B_{NP} = \{ x_{1}^{n} \in A^{n} : D(\hat{P}_{n}||Q) \geq D(\hat{P}_{n}||P) + T' \}
$$
with $T'=\frac{1}{n}\log T$.
#### Proof
By definition:
$$
\hat{P}_{n}(d) = \frac{1}{n} \sum_{i=1}^{n} 1_{\{ x_{1}=a \}}
$$
then 
$$
\begin{align}
\log \frac{P^{n}(x_{1}^{n})}{Q^{n}(x_{1}^{n})}  & = \sum_{i=1}^{n} \log \frac{ P(x_{i}) }{ Q(x_{i}) } \\
 & =\sum_{i=1}^{n}\sum_{a\in A} 1_{\{ x_{i}=a \}} \log \frac{P(a)}{Q(a)} \\
 & =n\sum_{a\in A} \frac{1}{n} \sum_{i=1}^{n} 1_{\{ x_{i}=a \}} \log \frac{P(a)}{Q(a)} \\
 & = n \sum_{a\in A} \hat{P}_{n} (a) \log \left( \frac{P(a)}{Q(a)} \frac{\hat{P}_{n}(a)}{\hat{P}_{n}(a)} \right)
\end{align}
$$
so
$$
\begin{align}
\log \frac{ P^{n}(x_{1}^{n}) }{ Q^{n}(x_{1}^{n}) }  & = n \left( \sum_{a\in A} \frac{\hat{P}_{n}(a)}{Q^{n}(a)} - \sum_{a\in A} \hat{P}_{n}(a)\log \frac{\hat{P}_{n}(a)}{P^{n}(a)} \right)  \\
 & =nD(\hat{P}_{n}||Q) - nD(\hat{P}_{n}||P)
\end{align}
$$
Substitute this back and we get exactly the result.
