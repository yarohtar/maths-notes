A lattice is a set $L$ with binary operations $\land$ and $\lor$ satisfying:

$$
a\lor(a\land b)=a
$$

$$
a\land(a\lor b)=a
$$

A lattice is distributive if

$$
a \land(b\lor c) = (a\land b)\lor(a\land c)
$$

A lattice is bounded if there are some $\bot,\top$ such that

$$
a\lor \bot=a\quad %quad
\text{and}\quad %quad
a\land \top=a
$$

A bounded lattice is complemented if for every $a\in L$ there is some $a^{*}$ with

$$
a\land a^{*}=\bot\quad %quad
\text{and}\quad %quad
a\lor a^{*}=\top
$$
