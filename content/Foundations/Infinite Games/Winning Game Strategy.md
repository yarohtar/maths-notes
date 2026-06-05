Let $Y$ be a [[Foundations/Infinite Games/Game Tree]] with [[Foundations/Infinite Games/Game Space]] $\mathcal{F}(Y)$.
Let $\mathcal{G}(A,Y)$ be a [[Foundations/Infinite Games/Two Person Infinite Game of Perfect Information\|Game]], where $A\subseteq \mathcal{F}(Y)$.
A `I`-[[Foundations/Infinite Games/Game Strategy]] $s$ is winning, 
if for any `II`-[[Foundations/Infinite Games/Game Strategy]] $t$, the sequence
$$
s(\varnothing), t(s(\varnothing)), s(t(s(\varnothing))),\dots
$$
is in $A$.

Similarly, a `II`-[[Foundations/Infinite Games/Game Strategy]] $t$ is winning, 
if for any `I`-[[Foundations/Infinite Games/Game Strategy]] $s$, the sequence 
$$
s(\varnothing), t(s(\varnothing)), s(t(s(\varnothing))),\dots
$$
is in $\mathcal{F}(Y)\setminus A$.
