Let $Y$ be a [[Game Tree]] with [[Game Space]] $\mathcal{F}(Y)$.
Let $\mathcal{G}(A,Y)$ be a [[Two Person Infinite Game of Perfect Information|Game]], where $A\subseteq \mathcal{F}(Y)$.
A `I`-[[Game Strategy]] $s$ is winning,
if for any `II`-[[Game Strategy]] $t$, the sequence

$$
s(\varnothing), t(s(\varnothing)), s(t(s(\varnothing))),\dots
$$

is in $A$.

Similarly, a `II`-[[Game Strategy]] $t$ is winning,
if for any `I`-[[Game Strategy]] $s$, the sequence

$$
s(\varnothing), t(s(\varnothing)), s(t(s(\varnothing))),\dots
$$

is in $\mathcal{F}(Y)\setminus A$.
