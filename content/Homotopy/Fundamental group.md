### Proposition
Given [[Homotopy/Paths\|paths]]:
$$
\begin{align}
\gamma_{0}:x_{0}\leadsto x_{1} \\
\gamma_{1}:x_{1}\leadsto x_{2} \\
\gamma_{2}:x_{2}\leadsto x_{3}
\end{align}
$$
The following hold:
1. $(\gamma_{0}\cdot \gamma_{1})\cdot \gamma_{2}\simeq \gamma_{0}\cdot(\gamma_{1}\cdot \gamma_{2})$ relative to $\{ 0,1 \}$
2. $\gamma_{0}\cdot c_{x_{0}}\simeq \gamma_{0}$ relative to $\{ 0,1 \}$
3. $\gamma_{0}\cdot \gamma_{0}^{-1}\simeq c_{x_{0}}$ relative to $\{ 0,1 \}$
#### Proof
(1) Let $t$ interpolate between paths and $s$ be the path variable.
Consider the following image:
```
^
|---0---|-1-|-2-|
|
t
|
|-0-|-1-|---2---|
*------s-------->
```
If we linearly scaled the bottom intervals to the top ones, the interval lengths would be (as a function of $t$): $t+1\over 4$, $\frac{1}{4}$, $2-t\over 4$.
This motivates the homotopy:
$$
H(s,t)=\begin{cases}
\gamma_{0}\left( \frac{4s}{t+1} \right) & s\leq \frac{t+1}{4} \\
\gamma_{1}\left(4s - t-1\right) & {t+1\over 4}\leq s\leq {t+2\over 4} \\
\gamma_{2}({4s\over 2-t} - {t+2\over 2-t}) & {t+2\over 4}\leq s
\end{cases}
$$
(2) Same strategy, with the following image
```
---0---
-0-|-c-
```
Interval lengths: $t+1\over 2$ and $1-t\over 2$
$$
H(s,t)=\begin{cases}
\gamma_{0}\left( \frac{2s}{t+1} \right) & s\leq {t+1\over 2} \\
x_{1} & s\geq {t+1\over 2}
\end{cases}
$$
(3) Now this one is a bit different, but also easier. We will just make paths that go up to $\gamma_{0}(1-t)$ and back.
$$
H(s,t)=\begin{cases}
\gamma_{0}(2s) & s\leq{1-t\over 2} \\
\gamma_{0}(1-t)  & {1-t\over 2} \leq s\leq {1+t\over 2} \\
\gamma_{0}(2-2s) & {1+t\over 2} \leq s
\end{cases}
$$

### Theorem
Let $X$ be a space and $x_{0}$ a point. Let $\pi_{1}(X,x_{0})$ be the set of homotopy classes of loops in $X$ based at $x_{0}$. Then using
$$
[\gamma]\cdot[\gamma']=[\gamma \cdot \gamma']
$$
gives a group structure
#### Proof
Directly from previous proposition.

### Definition
$\pi_{1}(X,x_{0})$ is the fundamental group of $X$ based at $x_{0}$.
[[Homotopy/Fundamental group isomorphisms]]