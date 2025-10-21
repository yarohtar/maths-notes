$$
B_{NP} = \left\{  x_{1}^{n} : \frac{ P^{n}(x_{1}^{n}) }{ Q^{n}(x_{1}^{n}) } \geq T   \right\}
$$
for some $T>0$
But note that if we let $\hat{P}^{n}$ define the empirical PMF induced by $x_{1}^{n}$ on $A^{n}$
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
so ...