package com.mycompany.myapp.service.dto;

import javax.validation.constraints.*;
import java.io.Serializable;
import javax.persistence.Lob;

/**
 * A DTO for the {@link com.mycompany.myapp.domain.Logement} entity.
 */
public class LogementDTO implements Serializable {
    
    private Long id;

    @NotNull
    private Integer nbreChambe;

    private Float sufarce;

    @Lob
    private byte[] photo;

    private String photoContentType;
    @NotNull
    private Integer loyer;

    @NotNull
    private String description;

    private Integer etage;

    private Boolean ascenceur;

    private Boolean garage;

    private Boolean piscine;

    private Boolean grenier;


    private Long adresseId;

    private Long paiementId;
    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getNbreChambe() {
        return nbreChambe;
    }

    public void setNbreChambe(Integer nbreChambe) {
        this.nbreChambe = nbreChambe;
    }

    public Float getSufarce() {
        return sufarce;
    }

    public void setSufarce(Float sufarce) {
        this.sufarce = sufarce;
    }

    public byte[] getPhoto() {
        return photo;
    }

    public void setPhoto(byte[] photo) {
        this.photo = photo;
    }

    public String getPhotoContentType() {
        return photoContentType;
    }

    public void setPhotoContentType(String photoContentType) {
        this.photoContentType = photoContentType;
    }

    public Integer getLoyer() {
        return loyer;
    }

    public void setLoyer(Integer loyer) {
        this.loyer = loyer;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getEtage() {
        return etage;
    }

    public void setEtage(Integer etage) {
        this.etage = etage;
    }

    public Boolean isAscenceur() {
        return ascenceur;
    }

    public void setAscenceur(Boolean ascenceur) {
        this.ascenceur = ascenceur;
    }

    public Boolean isGarage() {
        return garage;
    }

    public void setGarage(Boolean garage) {
        this.garage = garage;
    }

    public Boolean isPiscine() {
        return piscine;
    }

    public void setPiscine(Boolean piscine) {
        this.piscine = piscine;
    }

    public Boolean isGrenier() {
        return grenier;
    }

    public void setGrenier(Boolean grenier) {
        this.grenier = grenier;
    }

    public Long getAdresseId() {
        return adresseId;
    }

    public void setAdresseId(Long adresseId) {
        this.adresseId = adresseId;
    }

    public Long getPaiementId() {
        return paiementId;
    }

    public void setPaiementId(Long paiementId) {
        this.paiementId = paiementId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof LogementDTO)) {
            return false;
        }

        return id != null && id.equals(((LogementDTO) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "LogementDTO{" +
            "id=" + getId() +
            ", nbreChambe=" + getNbreChambe() +
            ", sufarce=" + getSufarce() +
            ", photo='" + getPhoto() + "'" +
            ", loyer=" + getLoyer() +
            ", description='" + getDescription() + "'" +
            ", etage=" + getEtage() +
            ", ascenceur='" + isAscenceur() + "'" +
            ", garage='" + isGarage() + "'" +
            ", piscine='" + isPiscine() + "'" +
            ", grenier='" + isGrenier() + "'" +
            ", adresseId=" + getAdresseId() +
            ", paiementId=" + getPaiementId() +
            "}";
    }
}
