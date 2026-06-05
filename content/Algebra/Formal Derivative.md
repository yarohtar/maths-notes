Given a [[Algebra/Formal Power Series]]
$$
A(x) = \sum_{n\geq 0} a_{n} x^{n}
$$
define the derivative 
$$
A'(x) = \sum_{n\geq 0} (n+1) a_{n+1} x^{n}
$$
### Remark
Think of it as building a structure on $n+1$ elements 
and then choosing one of those elements to be special (in $n+1$ ways).
### Lemma
$$
(A(x)+B(x))'=A'(x)+B'(x)
$$
$$
(A(x)\cdot B(x))' = A(x)B'(x) + A'(x)B(x)
$$
$$
(B(x)^{n})' = n(B(x)^{n-1})B'(x)
$$
$$
B(A(x)) = A'(x) B'(A(x))
$$
### Lemma
For [[Algebra/Formal Exponential]] and [[Algebra/Formal Logarithm]]:
$$
(\exp x)' = \exp x
$$
$$
(-\log(1-x))'= \frac{1}{1-x}
$$
$$
\exp(\log(1+x)) = 1+x
$$
