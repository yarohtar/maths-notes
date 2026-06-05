### Notation
1. $0\in\mathbb{N}$ with $n=\{ 0,\dots,n-1 \}$, $0=\emptyset$
2. $X$ finite set of symbols
   We call $X^n$ the set of $X$-strings of length $n$.
   Set theoretic convention:
   $\alpha\in X^n\implies \alpha:n\to X$; write $|\alpha|=n$
3. Empty string $\varepsilon : \emptyset\to X$
4. $X^*=\cup_{n\in \mathbb{N}}X^n$ the set of $X$-strings
5. If $|\alpha|=n$ and $k\leq n$, then $\alpha|_{k}$ is the unique initial segment of $\alpha$ with length $k$.
6. $X^+=X^*\setminus \{ \varepsilon \}$ The set of nonempty strings
7. $\alpha \beta$ the concatenation of $\alpha$ and $\beta$ 
8. Write $\alpha x$ for $\alpha \beta$ when $\beta$ is string containing only $x$ 
9. $x^n$ string of length $n$ containing only $x$ 
10. If $f:X\to Y$ then there is a natural $\hat{f}:X^*\to Y^*$
11. Set is infinite if $\mathbb{N}$ injects into it
12. Set is countable if its empty or $\mathbb{N}$ surjects onto it

[[Foundations/Computability/Rewrite System]]
[[Foundations/Computability/Formal Language]]
[[Foundations/Computability/Grammar]]

[[Foundations/Computability/The Chomsky Hierarchy]]
[[Foundations/Computability/Regular Formal Language]]
[[Foundations/Computability/Context-Free Formal Language]]

[[Foundations/Computability/Register Machine]]