Given $n,m\in \mathbb{N}$, the function
$$
P_{n}(m) = 1^{n} + 2^{n} + \dots + m^{n} 
$$
is a polynomial of degree $n+1$ given by
$$
P_{n}(m) = \sum_{k=0}^{n} k! \genfrac{\{}{\}}{0pt}{0}{ n }{ k } \binom{ m+1 }{ k+1 }
$$
where we used these notations:
[[Combinatorics/Counting/Stirling Number of the Second Kind]]
[[Combinatorics/Counting/Binomial Coefficient]]
#### Proof
Use the $x^{n}$ identity from [[Combinatorics/Counting/Stirling Number of the Second Kind]]
to change basis of the vector space $V$ of polynomials of degree $\leq n$ 
from $\{ 1,x,x^{2},\dots,x^{n} \}$ to 
$$
\left\{ \binom{ x }{ 0 }, \binom{ x }{ 1 }, \dots, \binom{ x }{ n } \right\}
$$
Now just calculate:
$$
P_{n}(m) = \sum_{x=1}^{m} x^{n} = \sum_{x=1}^{m} \sum_{k=0}^{n}  \genfrac{ \{ }{ \} }{0pt}{0}{ n }{ k } x^{\underline{k}} = \sum_{k=0}^{n} k! \genfrac{ \{ }{ \} }{0pt}{0}{ n }{ k } \sum_{x=1}^{m} \binom{ x }{ k }
$$
The last sum is done using a [[Combinatorics/Counting/Binomial Coefficient]] identity.